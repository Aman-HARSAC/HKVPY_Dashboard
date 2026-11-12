import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import "@arcgis/core/assets/esri/themes/light/main.css";



import ArcGISMap from "@arcgis/core/Map";

import MapView from "@arcgis/core/views/MapView";

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

import Graphic from "@arcgis/core/Graphic";

import Point from "@arcgis/core/geometry/Point";

import LabelClass from "@arcgis/core/layers/support/LabelClass";

import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";


import Basemap from "@arcgis/core/Basemap";



import TreeIcon from "../../assets/TreeIcon.png";

import TreeLoaderImage from "../../assets/map-loader-tree.png";

import CurrentLocationIcon from "../../assets/map-current-location.png";

import HomeIcon from "../../assets/map-home.png";

import BasemapIcon from "../../assets/map-basemap.svg";

import { layerapi } from "../../api/api";



const BOUNDARY_SERVICE_URL =
  layerapi?.StateDistrictBlockVillageLayerApi ||
  layerapi?.BlockVillageLayerApi ||
  "https://hsacggm.in/server/rest/services/PMFBY_Survey/Boundaries/MapServer";



const BASEMAPS = [

  { id: "satellite", label: "Satellite" },

  { id: "hybrid", label: "Satellite + labels" },

  { id: "streets", label: "Streets" },

  { id: "topo-vector", label: "Topographic" },

  { id: "gray-vector", label: "Light grey" },

  { id: "dark-gray-vector", label: "Dark grey" },

];



const clean = (value) => String(value ?? "").trim();

const same = (a, b) => clean(a).toLowerCase() === clean(b).toLowerCase();

const sqlValue = (value) => clean(value).replace(/'/g, "''");



const dateOnly = (value) => {

  if (!value) return "";

  const valueText = clean(value);

  if (/^\d{4}-\d{2}-\d{2}$/.test(valueText)) return valueText;

  const date = new Date(value);

  return Number.isNaN(date.getTime())

    ? valueText.slice(0, 10)

    : date.toISOString().slice(0, 10);

};



const findField = (layer, candidates) => {

  const fields = layer?.fields ?? [];

  return fields.find((field) =>

    candidates.some((candidate) => field.name.toLowerCase() === candidate.toLowerCase())

  )?.name ?? null;

};



const makeLabelClass = (field, color, size = 10) =>

  new LabelClass({

    labelExpressionInfo: { expression: `$feature["${field}"]` },

    labelPlacement: "always-horizontal",

    deconflictionStrategy: "none",

    symbol: {

      type: "text",

      color,

      haloColor: "#ffffff",

      haloSize: 1.8,

      font: { size, weight: "bold" },

    },

  });



const districtColors = [

  [221, 235, 247, 0.88], [226, 239, 218, 0.88],

  [255, 242, 204, 0.88], [234, 224, 240, 0.88],

  [248, 218, 222, 0.88], [213, 236, 239, 0.88],

  [239, 228, 205, 0.88], [224, 226, 245, 0.88],

  [244, 232, 204, 0.88], [224, 238, 226, 0.88],

  [246, 224, 236, 0.88], [218, 232, 246, 0.88],

];



const districtNames = [

  "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad",

  "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal",

  "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula",

  "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar",

];



const districtUniqueValues = districtNames.map((name, index) => ({

  value: name.toUpperCase(),

  symbol: {

    type: "simple-fill",

    color: districtColors[index % districtColors.length],

    outline: { color: [100, 116, 139, 0.9], width: 0.8 },

  },

  label: name,

}));



export default function Map({

  treeData = [],

  filters = {},

  loading = false,

  onResetFilters,

  filterPanelOpen = false,

}) {

  const elementRef = useRef(null);

  const viewRef = useRef(null);

  const mapRef = useRef(null);

  const treeLayerRef = useRef(null);

  const currentLocationLayerRef = useRef(null);

  const stateLayerRef = useRef(null);

  const districtLayerRef = useRef(null);

  const tehsilLayerRef = useRef(null);

  const villageLayerRef = useRef(null);

  const initialExtentRef = useRef(null);

  const initialViewpointRef = useRef(null);

  const locatingRef = useRef(false);
  const suppressNextFilterNavigationRef = useRef(false);



  const [mapError, setMapError] = useState("");

  const [mapNotice, setMapNotice] = useState("");

  const [isMapBusy, setIsMapBusy] = useState(false);

  const [isMapReady, setIsMapReady] = useState(false);

  const [busyMessage, setBusyMessage] = useState("Growing your map…");

  const [basemapOpen, setBasemapOpen] = useState(false);

  const [activeBasemap, setActiveBasemap] = useState("none");

  const [currentZoom, setCurrentZoom] = useState(7);



  const visibleTrees = useMemo(() => treeData.filter((tree) => {

    if (filters.district && !same(tree.n_d_name, filters.district)) return false;

    if (filters.tehsil && !same(tree.n_t_name, filters.tehsil)) return false;

    if (filters.village && !same(tree.n_v_name, filters.village)) return false;

    if (filters.species && !same(tree.tree_species, filters.species)) return false;

    if (filters.treeId && !same(tree.tree_id, filters.treeId)) return false;



    const created = dateOnly(tree.created_date);

    if (filters.startDate && (!created || created < filters.startDate)) return false;

    if (filters.endDate && (!created || created > filters.endDate)) return false;

    return true;

  }), [treeData, filters]);



  // Restore the complete first-load dashboard state. This action deliberately
  // does not depend on the current filters, zoom, GPS marker, or chosen basemap.
  const goHome = useCallback(async () => {
    const view = viewRef.current;
    const map = mapRef.current;

    // Home must take priority over any active filter/GPS/zoom animation.
    suppressNextFilterNavigationRef.current = true;
    view?.animation?.stop();

    // Clear dashboard filters even if the map view is not ready yet.
    if (typeof onResetFilters === "function") onResetFilters();

    setBasemapOpen(false);
    setMapNotice("");
    setMapError("");
    setActiveBasemap("gray-vector");
    setBusyMessage("Restoring the Haryana dashboard…");
    setIsMapBusy(true);
    locatingRef.current = false;
    currentLocationLayerRef.current?.removeAll();

    if (!view) {
      setIsMapBusy(false);
      return;
    }

    try {
      // Cancel an unfinished pan/zoom so Home wins on a single click.
      view.animation?.stop();
      view.popup?.close();
      await view.when();

      // Restore the same basemap state used when the map was first created.
      if (map) map.basemap = Basemap.fromId("gray-vector");

      if (initialViewpointRef.current) {
        await view.goTo(initialViewpointRef.current.clone(), { duration: 0 });
      } else if (initialExtentRef.current) {
        await view.goTo(initialExtentRef.current.clone().expand(1.08), { duration: 0 });
      } else {
        await view.goTo({ center: [76.2, 29.0], zoom: 7.2 }, { duration: 0 });
      }

      // Restore administrative boundary visibility for the initial zoom.
      const homeZoom = Number(view.zoom) || 7.2;
      const stateLayer = stateLayerRef.current;
      const districtLayer = districtLayerRef.current;
      const tehsilLayer = tehsilLayerRef.current;
      const villageLayer = villageLayerRef.current;

      if (stateLayer) {
        stateLayer.visible = homeZoom < 9;
        stateLayer.labelsVisible = homeZoom < 9;
      }
      if (districtLayer) {
        districtLayer.visible = homeZoom < 9;
        districtLayer.labelsVisible = homeZoom < 9;
      }
      if (tehsilLayer) {
        tehsilLayer.visible = homeZoom >= 9 && homeZoom < 12;
        tehsilLayer.labelsVisible = homeZoom >= 10 && homeZoom < 12;
      }
      if (villageLayer) {
        villageLayer.visible = homeZoom >= 12;
        villageLayer.labelsVisible = homeZoom >= 13;
      }

      // Keep the loader visible until React has committed the cleared filters
      // and the browser has had a chance to render the restored map.
      await new Promise((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(resolve))
      );

      view.popup?.close();
      setMapNotice("");
    } catch (error) {
      console.warn("Could not restore the initial Haryana view:", error);
      setMapNotice("Could not restore the Haryana overview. Please try again.");
    } finally {
      setIsMapBusy(false);
    }
  }, [onResetFilters]);



  const zoomIn = useCallback(async () => {

    const view = viewRef.current;

    if (!view) return;

    setBusyMessage("Growing the map…");

    setIsMapBusy(true);

    try {

      await view.goTo({ zoom: Math.min((view.zoom ?? 7) + 1, 20) }, { duration: 250 });

    } catch (error) {

      console.warn("Zoom in failed:", error);

    } finally {

      setIsMapBusy(false);

    }

  }, []);



  const zoomOut = useCallback(async () => {

    const view = viewRef.current;

    if (!view) return;

    setBusyMessage("Adjusting map zoom…");

    setIsMapBusy(true);

    try {

      await view.goTo({ zoom: Math.max((view.zoom ?? 7) - 1, 5) }, { duration: 250 });

    } catch (error) {

      console.warn("Zoom out failed:", error);

    } finally {

      setIsMapBusy(false);

    }

  }, []);



  const locateCurrentPosition = useCallback(() => {

    const view = viewRef.current;

    if (!view || locatingRef.current) return;



    if (!navigator.geolocation) {

      setMapNotice("This browser does not support current-location access.");

      return;

    }



    locatingRef.current = true;

    setBusyMessage("Finding your current location…");

    setIsMapBusy(true);

    setMapNotice("");



    navigator.geolocation.getCurrentPosition(

      async (position) => {

        locatingRef.current = false;

        const currentView = viewRef.current;

        const locationLayer = currentLocationLayerRef.current;

        if (!currentView || !locationLayer) {

          setIsMapBusy(false);

          return;

        }



        const longitude = Number(position.coords.longitude);

        const latitude = Number(position.coords.latitude);

        const accuracy = Number(position.coords.accuracy);

        const point = new Point({ longitude, latitude });



        try {

          locationLayer.removeAll();

          locationLayer.add(new Graphic({

            geometry: point,

            symbol: {

              type: "picture-marker",

              url: CurrentLocationIcon,

              width: "38px",

              height: "38px",

              yoffset: "8px",

            },

            attributes: { longitude, latitude, accuracy },

            popupTemplate: {

              title: "Your current location",

              content: `Latitude: ${latitude.toFixed(6)}<br>Longitude: ${longitude.toFixed(6)}<br>GPS accuracy: ${Number.isFinite(accuracy) ? Math.round(accuracy) + " metres" : "Unknown"}`,

            },

          }));



          // Zoom 18 is a close street-level view; GPS accuracy depends on the device.

          await currentView.goTo({ target: point, zoom: 18 }, { duration: 850 });

          setMapNotice(

            `Showing your current location${Number.isFinite(accuracy) ? ` (GPS accuracy approximately ${Math.round(accuracy)} m)` : ""}.`

          );

        } catch (error) {

          console.warn("Could not display current location:", error);

          setMapNotice("Your location was found, but the map could not zoom to it.");

        } finally {

          setIsMapBusy(false);

        }

      },

      (error) => {

        locatingRef.current = false;

        setIsMapBusy(false);

        const message = error.code === 1

          ? "Location permission was denied. Allow location access in your browser."

          : error.code === 2

            ? "Your current location is unavailable."

            : "Location request timed out. Please try again.";

        setMapNotice(message);

      },

      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }

    );

  }, []);



  const chooseBasemap = useCallback(async (id) => {

    const map = mapRef.current;

    if (!map) return;

    setBusyMessage("Loading basemap…");

    setIsMapBusy(true);

    try {

      const basemap = Basemap.fromId(id);

      if (!basemap) throw new Error(`Basemap "${id}" is not available.`);

      map.basemap = basemap;

      setActiveBasemap(id);

      setBasemapOpen(false);

      setMapNotice(`${BASEMAPS.find((item) => item.id === id)?.label ?? "Basemap"} selected.`);

    } catch (error) {

      console.error("Basemap selection failed:", error);

      setMapNotice("This basemap could not be loaded. Check your internet connection.");

    } finally {

      setIsMapBusy(false);

    }

  }, []);



  // Create the map and its boundary layers once.

  useEffect(() => {

    if (!elementRef.current) return undefined;



    let disposed = false;

    let resizeObserver;

    let zoomWatcher;
    let readinessFallback;

    let view;



    const treeLayer = new GraphicsLayer({ title: "Tree Locations" });

    treeLayerRef.current = treeLayer;



    const currentLocationLayer = new GraphicsLayer({ title: "Current Location" });

    currentLocationLayerRef.current = currentLocationLayer;



    const initializeMap = async () => {
      // Discover sublayer IDs from the service metadata instead of assuming IDs.
      const serviceUrl = BOUNDARY_SERVICE_URL.replace(/\/$/, "");
      const metadataResponse = await fetch(`${serviceUrl}?f=pjson`);
      if (!metadataResponse.ok) throw new Error(`Boundary service returned ${metadataResponse.status}`);
      const serviceMetadata = await metadataResponse.json();
      if (serviceMetadata.error) throw new Error(serviceMetadata.error.message || "Boundary service metadata failed");
      if (disposed) return;

      const serviceLayers = (serviceMetadata.layers || []).filter((item) =>
        item && item.id != null && !/group layer/i.test(item.type || "")
      );
      const findServiceLayer = (patterns, exclude = []) => serviceLayers.find((item) => {
        const name = clean(item.name).toLowerCase();
        return patterns.some((pattern) => pattern.test(name)) &&
          !exclude.some((pattern) => pattern.test(name));
      });

      const stateMeta = findServiceLayer([/state boundary/i, /^state$/i, /haryana boundary/i], [/district/i, /sub.?state/i]);
      const districtMeta = findServiceLayer([/district/i], [/sub.?district/i, /village/i]);
      const tehsilMeta = findServiceLayer([/tehsil/i, /sub.?district/i, /block boundary/i, /^block$/i], [/village/i]);
      const villageMeta = findServiceLayer([/village/i, /gram/i], []);

      if (!districtMeta && !tehsilMeta && !villageMeta && !stateMeta) {
        throw new Error("No state, district, tehsil/block, or village feature layers were found in the boundary service.");
      }

      const mapLayers = [];
      const makeBoundaryLayer = (meta, title, fill, outline, width, visible) => {
        if (!meta) return null;
        return new FeatureLayer({
          url: `${serviceUrl}/${meta.id}`,
          title,
          outFields: ["*"],
          visible,
          labelsVisible: false,
          renderer: new SimpleRenderer({
            symbol: {
              type: "simple-fill",
              color: fill,
              outline: { color: outline, width },
            },
          }),
        });
      };

      const stateLayer = makeBoundaryLayer(
        stateMeta, "Haryana State Boundary", [59, 130, 246, 0.015], [37, 99, 235, 0.95], 2.1, true
      );
      const districtLayer = makeBoundaryLayer(
        districtMeta, "Haryana District Boundaries", [232, 238, 244, 0.12], [100, 116, 139, 0.95], 1.05, true
      );
      const tehsilLayer = makeBoundaryLayer(
        tehsilMeta, "Tehsil / Block Boundaries", [245, 158, 11, 0.025], [217, 119, 6, 0.95], 1.05, false
      );
      const villageLayer = makeBoundaryLayer(
        villageMeta, "Village Boundaries", [16, 185, 129, 0.025], [5, 150, 105, 0.8], 0.65, false
      );

      stateLayerRef.current = stateLayer;
      districtLayerRef.current = districtLayer;
      tehsilLayerRef.current = tehsilLayer;
      villageLayerRef.current = villageLayer;
      [stateLayer, districtLayer, tehsilLayer, villageLayer].filter(Boolean).forEach((layer) => mapLayers.push(layer));

    mapLayers.push(treeLayer);

    mapLayers.push(currentLocationLayer);

    const map = new ArcGISMap({ basemap: "gray-vector", layers: mapLayers });

    mapRef.current = map;



    view = new MapView({

      container: elementRef.current,

      map,

      center: [76.2, 29.0],

      zoom: 7,

      constraints: { minZoom: 5, maxZoom: 20, snapToZoom: false },

      // Keep only attribution in ArcGIS UI; custom zoom +/- buttons are in our toolbar.

      ui: { components: ["attribution"] },

      background: { color: [248, 250, 252, 1] },

      popup: { dockEnabled: true, dockOptions: { position: "bottom-right", breakpoint: false } },

    });

    viewRef.current = view;



    const configureLabels = async () => {

      if (stateLayer) {
        try {
          await stateLayer.load();
          const stateNameField = findField(stateLayer, ["state", "state_name", "st_name", "name", "state_nm", "stname"]);
          if (stateNameField) {
            stateLayer.definitionExpression = `${stateNameField} = 'Haryana'`;
            stateLayer.labelingInfo = [makeLabelClass(stateNameField, "#1d4ed8", 11)];
          }
        } catch (error) {
          console.warn("State boundary layer could not load:", error);
        }
      }

      if (districtLayer) {
        try {
          await districtLayer.load();
          if (disposed) return;
          const districtField = findField(districtLayer, [
            "district", "n_d_name", "district_name", "dist_name", "Dist_Name", "dtname", "dt_name", "NAME_2",
          ]);
          const stateField = findField(districtLayer, ["state", "state_name", "st_name", "stname", "state_nm"]);
          if (stateField) districtLayer.definitionExpression = `${stateField} = 'Haryana'`;
          if (districtField) {
            districtLayer.labelingInfo = [makeLabelClass(districtField, "#172554", 10)];
            districtLayer.labelsVisible = true;
          }
        } catch (error) {
          console.warn("District boundary layer could not load:", error);
        }
      }

      if (tehsilLayer) {

        try {

          await tehsilLayer.load();

          const field = findField(tehsilLayer, [

            "n_t_name", "tehsil_name", "tehsil", "name", "NAME_3", "block_name", "block", "blk_name", "sdtname",

          ]);

          if (field) tehsilLayer.labelingInfo = [makeLabelClass(field, "#92400e", 9)];

        } catch (error) {

          console.warn("Tehsil boundary layer could not load:", error);

        }

      }



      if (villageLayer) {

        try {

          await villageLayer.load();

          const field = findField(villageLayer, [

            "n_v_name", "village_name", "villagename", "village", "name", "vilname", "vill_name",

          ]);

          if (field) villageLayer.labelingInfo = [makeLabelClass(field, "#047857", 8)];

        } catch (error) {

          console.warn("Village boundary layer could not load:", error);

        }

      }

    };



    const updateVisibility = (zoom) => {

      if (disposed) return;

      if (stateLayer) {
        stateLayer.visible = zoom < 9;
        stateLayer.labelsVisible = zoom < 9;
      }
      if (districtLayer) {
        districtLayer.visible = zoom < 9;
        districtLayer.labelsVisible = zoom < 9;
      }
      if (tehsilLayer) {
        tehsilLayer.visible = zoom >= 9 && zoom < 12;
        tehsilLayer.labelsVisible = zoom >= 10 && zoom < 12;
      }
      if (villageLayer) {
        villageLayer.visible = zoom >= 12;
        villageLayer.labelsVisible = zoom >= 13;
      }
      setCurrentZoom(Number(zoom) || 7);

    };



    zoomWatcher = view.watch("zoom", updateVisibility);

    resizeObserver = new ResizeObserver(() => view?.resize());

    resizeObserver.observe(elementRef.current);



    // Fail-safe: a slow/unresponsive boundary service must not trap the loader forever.

    readinessFallback = setTimeout(() => {

      if (!disposed) {

        console.warn("Map boundary initialization is taking longer than expected; releasing the loader.");

        setIsMapReady(true);

      }

    }, 20000);



    view.when().then(async () => {

      if (disposed) return;

      await configureLabels();

      if (disposed) return;

      updateVisibility(view.zoom);



      let extentResult = null;
      const extentLayer = districtLayer || stateLayer || tehsilLayer || villageLayer;
      if (extentLayer) {
        const query = extentLayer.createQuery();
        query.where = extentLayer.definitionExpression || "1=1";
        query.returnGeometry = true;
        query.outSpatialReference = view.spatialReference;
        extentResult = await extentLayer.queryExtent(query);
      }

      if (disposed) return;
      if (extentResult?.extent) {

        initialExtentRef.current = extentResult.extent.expand(1.08);

        await view.goTo(initialExtentRef.current, { animate: false });

      } else {

        await view.goTo({ center: [76.2, 29.0], zoom: 7.2 }, { animate: false });

        initialExtentRef.current = view.extent?.clone() ?? null;

      }

      initialViewpointRef.current = view.viewpoint?.clone() ?? null;

    }).catch((error) => {

      console.error("ArcGIS map initialization failed:", error);

      if (!disposed) setMapError("The map could not load. Check the boundary service and network connection.");

    }).finally(() => {

      clearTimeout(readinessFallback);

      if (!disposed) setIsMapReady(true);

    });
    };

    initializeMap().catch((error) => {
      console.error("ArcGIS map initialization failed:", error);
      if (!disposed) {
        setMapError("The map could not load the administrative boundaries. Check the PMFBY MapServer URL and network connection.");
        setIsMapReady(true);
      }
    });

    return () => {

      disposed = true;

      clearTimeout(readinessFallback);

      zoomWatcher?.remove();

      resizeObserver?.disconnect();

      view?.destroy();

      mapRef.current = null;

      viewRef.current = null;

      treeLayerRef.current = null;

      currentLocationLayerRef.current = null;

      stateLayerRef.current = null;

      districtLayerRef.current = null;

      tehsilLayerRef.current = null;

      villageLayerRef.current = null;

    };

  }, []);



  // Update tree markers whenever the filtered tree records change.

  useEffect(() => {

    const layer = treeLayerRef.current;

    if (!layer) return;



    const graphics = visibleTrees

      .filter((tree) => {

        const longitude = Number(tree.longitude);

        const latitude = Number(tree.latitude);

        return clean(tree.longitude) !== "" &&

          clean(tree.latitude) !== "" &&

          Number.isFinite(longitude) && Number.isFinite(latitude) &&

          longitude >= -180 && longitude <= 180 &&

          latitude >= -90 && latitude <= 90;

      })

      .map((tree) => {

        const longitude = Number(tree.longitude);

        const latitude = Number(tree.latitude);

        return new Graphic({

          geometry: new Point({ longitude, latitude }),

          symbol: { type: "picture-marker", url: TreeIcon, width: "24px", height: "24px" },

          attributes: { ...tree, longitude, latitude },

          popupTemplate: {

            title: "🌳 {tree_species}",

            content: [{

              type: "fields",

              fieldInfos: [

                { fieldName: "tree_id", label: "Tree ID" },

                { fieldName: "tree_species", label: "Tree species" },

                { fieldName: "n_d_name", label: "District" },

                { fieldName: "n_t_name", label: "Tehsil" },

                { fieldName: "n_v_name", label: "Village" },

                { fieldName: "survey_status", label: "Survey status" },

                { fieldName: "created_date", label: "Created date" },

                { fieldName: "tree_age", label: "Tree age" },

                { fieldName: "latitude", label: "Latitude" },

                { fieldName: "longitude", label: "Longitude" },

              ],

            }],

          },

        });

      });



    layer.removeAll();

    if (graphics.length) layer.addMany(graphics);

  }, [visibleTrees]);



  // When the applied filter changes, zoom to village, tehsil, district, or filtered trees.

  useEffect(() => {

    const view = viewRef.current;

    if (!view) return undefined;

    let cancelled = false;



    const run = async () => {

      try {

        await view.when();

        if (cancelled) return;



        const hasFilters = [

          filters.district, filters.tehsil, filters.village,

          filters.species, filters.treeId, filters.startDate, filters.endDate,

        ].some(Boolean);

        // The Home handler has already restored the first-load extent. Consume
        // this reset cycle so this effect cannot override Home with stale filters.
        if (suppressNextFilterNavigationRef.current && !hasFilters) {
          suppressNextFilterNavigationRef.current = false;
          return;
        }

        if (hasFilters) {

          setBusyMessage("Finding the selected area…");

          setIsMapBusy(true);

        }



        if (!hasFilters) {

          view.popup?.close();

          if (initialViewpointRef.current) {

            await view.goTo(initialViewpointRef.current, { duration: 500 });

          } else if (initialExtentRef.current) {

            await view.goTo(initialExtentRef.current, { duration: 500 });

          }

          return;

        }



        const tryBoundary = async (layer, candidates, value) => {

          if (!layer || !value) return false;

          await layer.load();

          const field = findField(layer, candidates);

          if (!field) return false;



          const query = layer.createQuery();

          query.where = `${field} = '${sqlValue(value)}'`;

          query.returnGeometry = true;

          query.outSpatialReference = view.spatialReference;

          const result = await layer.queryFeatures(query);

          if (cancelled || !result.features.length) return false;



          const extent = result.features.reduce((combined, feature) => {
            const featureExtent = feature.geometry?.extent;
            if (!featureExtent) return combined;
            return combined ? combined.union(featureExtent) : featureExtent.clone();
          }, null);
          if (!extent) return false;
          view.animation?.stop();
          await view.goTo(extent.expand(1.18), { duration: 650 });

          return true;

        };



        if (filters.village && await tryBoundary(

          villageLayerRef.current,

          ["n_v_name", "village_name", "villagename", "village", "name", "vilname", "vill_name"],

          filters.village

        )) return;



        if (filters.tehsil && await tryBoundary(

          tehsilLayerRef.current,

          ["n_t_name", "tehsil_name", "tehsil", "name", "NAME_3", "block_name", "block", "blk_name", "sdtname"],

          filters.tehsil

        )) return;



        if (filters.district && await tryBoundary(

          districtLayerRef.current,

          ["district", "n_d_name", "district_name", "dist_name", "Dist_Name", "dtname", "dt_name", "NAME_2"],

          filters.district

        )) return;



        const layer = treeLayerRef.current;

        const graphics = layer?.graphics?.toArray?.() ?? [];

        if (filters.treeId && graphics.length === 1) {

          await view.goTo({ target: graphics[0].geometry, zoom: 17 }, { duration: 650 });

          if (!cancelled) await view.openPopup({ features: [graphics[0]], location: graphics[0].geometry });

        } else if (graphics.length) {

          await view.goTo(graphics.map((graphic) => graphic.geometry), { duration: 650 });

        }

      } catch (error) {

        console.warn("Map filter zoom failed:", error);

      } finally {

        if (!cancelled) setIsMapBusy(false);

      }

    };



    run();

    return () => { cancelled = true; };

  }, [
    filters.district,
    filters.tehsil,
    filters.village,
    filters.species,
    filters.treeId,
    filters.startDate,
    filters.endDate,
  ]);



  return (

    <div className="relative h-full min-h-0 w-full overflow-hidden bg-slate-50">

      <div ref={elementRef} className="absolute inset-0 h-full w-full" aria-label="Haryana tree survey map" />



      {/* Custom controls call MapView methods directly so they remain interactive. */}

      <div className={`absolute z-[100] flex flex-col overflow-hidden rounded-xl border border-slate-300 bg-white shadow-lg transition-[left,top] duration-300 ${

        filterPanelOpen

          ? "left-[calc(min(88vw,340px)+12px)] top-3 sm:left-[362px] lg:left-[322px] xl:left-[332px]"

          : "left-3 top-[82px]"

      }`}>

        <button type="button" onClick={zoomIn} title="Zoom in" aria-label="Zoom in"

          className="flex h-10 w-11 shrink-0 items-center justify-center border-b border-slate-200 bg-white text-2xl font-semibold leading-none text-slate-800 hover:bg-slate-100">+</button>

        <button type="button" onClick={zoomOut} title="Zoom out" aria-label="Zoom out"

          className="flex h-10 w-11 shrink-0 items-center justify-center border-b border-slate-200 bg-white text-2xl font-semibold leading-none text-slate-800 hover:bg-slate-100">−</button>

        <button type="button" onClick={goHome} title="Home: clear filters and show all Haryana" aria-label="Home"

          className="flex h-11 w-11 shrink-0 items-center justify-center border-b border-slate-200 bg-white text-blue-700 hover:bg-blue-50">

          <img src={HomeIcon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />

        </button>

        <button type="button" onClick={locateCurrentPosition} title="Current location" aria-label="Current location"

          className="flex h-11 w-11 shrink-0 items-center justify-center border-b border-slate-200 bg-white text-emerald-700 hover:bg-emerald-50">

          <img src={CurrentLocationIcon} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />

        </button>

        <button type="button" onClick={() => setBasemapOpen((open) => !open)} title="Choose basemap" aria-label="Choose basemap"

          className={`flex h-11 w-11 shrink-0 items-center justify-center bg-white text-slate-800 hover:bg-slate-100 ${basemapOpen ? "bg-blue-50 text-blue-700" : ""}`}>

          <img src={BasemapIcon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />

        </button>

      </div>



      {basemapOpen && (

        <div className={`absolute top-[163px] z-[110] w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-xl ${

          filterPanelOpen

            ? "left-[calc(min(88vw,340px)+59px)] sm:left-[409px] lg:left-[369px] xl:left-[379px]"

            : "left-[62px]"

        }`}>

          <div className="flex items-center justify-between px-2 py-1.5">

            <span className="text-sm font-bold text-slate-800">Choose basemap</span>

            <button type="button" onClick={() => setBasemapOpen(false)} aria-label="Close basemap menu" className="rounded p-1 text-slate-500 hover:bg-slate-100">×</button>

          </div>

          {BASEMAPS.map((item) => (

            <button key={item.id} type="button" onClick={() => chooseBasemap(item.id)}

              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50 ${activeBasemap === item.id ? "bg-blue-50 font-semibold text-blue-700" : "text-slate-700"}`}>

              <span>{item.label}</span>

              {activeBasemap === item.id && <span aria-hidden="true">✓</span>}

            </button>

          ))}

        </div>

      )}



      <div className="absolute bottom-3 left-3 z-10 rounded-lg border border-slate-200 bg-white/95 px-3 py-2 text-xs text-slate-600 shadow-sm">

        {loading ? "Loading tree records…" : `${visibleTrees.length.toLocaleString("en-IN")} trees on map`}

        <span className="ml-2 text-slate-400">Zoom {currentZoom.toFixed(1)}</span>

      </div>



      {mapNotice && (

        <div className="absolute bottom-12 left-3 z-30 max-w-[min(90%,360px)] rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 shadow-md">

          <div className="flex items-start gap-2">

            <span className="flex-1">{mapNotice}</span>

            <button type="button" onClick={() => setMapNotice("")} aria-label="Dismiss message" className="font-bold text-slate-500">×</button>

          </div>

        </div>

      )}



      {(isMapBusy || loading || !isMapReady) && (

        <div

          className="pointer-events-none absolute inset-0 z-[80] flex items-center justify-center bg-white/45 backdrop-blur-[1px]"

          role="status"

          aria-live="polite"

          aria-label={loading ? "Loading tree data…" : !isMapReady ? "Loading Haryana boundaries…" : busyMessage}

        >

          <div className="flex min-w-[190px] flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-white/95 px-6 py-5 shadow-xl">

            <div className="tree-loader-scene relative flex h-36 w-36 items-center justify-center sm:h-44 sm:w-44" aria-hidden="true">

              <svg className="tree-loader-spinner absolute inset-0 h-full w-full" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">

                {Array.from({ length: 12 }, (_, i) => (

                  <rect

                    key={i}

                    className="tree-loader-spoke"

                    x="75"

                    y="7"

                    width="10"

                    height="27"

                    rx="5"

                    fill={i < 4 ? "#166534" : i < 8 ? "#22A06B" : "#A7DCC0"}

                    transform={`rotate(${i * 30} 80 80)`}

                    style={{ animationDelay: `${i * 70}ms` }}

                  />

                ))}

              </svg>

              <div className="tree-loader-center absolute flex h-[68%] w-[68%] items-center justify-center overflow-hidden rounded-full bg-white/95 shadow-sm">

                <img

                  src={TreeLoaderImage}

                  alt=""

                  className="tree-loader-tree h-full w-full object-contain"

                  draggable="false"

                />

              </div>

            </div>

            <p className="text-sm font-semibold text-slate-700">

              {loading ? "Loading tree data…" : !isMapReady ? "Loading Haryana boundaries…" : busyMessage}

            </p>

            <div className="h-1.5 w-36 overflow-hidden rounded-full bg-emerald-100">

              <div className="h-full w-1/2 animate-pulse rounded-full bg-emerald-500" />

            </div>

          </div>

        </div>

      )}



      <style>{`

        @keyframes spokeGlow {

          0%, 100% { opacity: 0.38; }

          50% { opacity: 1; }

        }

        @keyframes treeBreath {

          0%, 100% { transform: scale(0.94); }

          50% { transform: scale(1.03); }

        }

        .tree-loader-spinner {

          animation: treeLoaderRotate 1.8s linear infinite;

          overflow: visible;

        }

        @keyframes treeLoaderRotate {

          from { transform: rotate(0deg); }

          to { transform: rotate(360deg); }

        }

        .tree-loader-spoke {

          animation: spokeGlow 1.05s ease-in-out infinite;

        }

        .tree-loader-tree {

          object-position: center;

          animation: treeBreath 1.8s ease-in-out infinite;

          filter: drop-shadow(0 2px 4px rgba(20, 83, 45, 0.14));

        }

        @media (prefers-reduced-motion: reduce) {

          .tree-loader-spinner, .tree-loader-spoke, .tree-loader-tree {

            animation: none;

          }

        }

      `}</style>



      {mapError && (

        <div role="alert" className="absolute bottom-20 left-3 right-3 z-30 rounded-lg bg-white p-3 text-sm text-red-700 shadow">

          {mapError}

        </div>

      )}

    </div>

  );

}
