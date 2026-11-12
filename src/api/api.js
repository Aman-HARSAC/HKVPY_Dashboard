import apiClient from "./apiClient";


//const HKVPY = "https://hsac.org.in/API_hsac/API_FamilyID";
// const familyAPIBaseUrl = "http://localhost:3001";

export const sendOtp = (payload) => {
  return apiClient.post("/IncomeVerification/api/login", payload);
};



export const verifyOtp = (payload) => {
  return apiClient.post("/IncomeVerification/api/verifyotp", payload);
};

// server path all APIs start

 export const mappingData = {
 
   TreeData: "https://hsac.org.in/API_HKVPY/api_tree_survey_hkvpy/get_tree",
   SurveyedData: "https://hsac.org.in/API_HKVPY/api_tree_survey_hkvpy/get_gdb_tree",
   StatusData: "https://hsac.org.in/API_HKVPY/api_tree_survey_hkvpy/get_all_tree",
   AllTableData: "https://hsac.org.in/API_HKVPY/api_tree_survey_hkvpy/get_mst_tables",
};

// server path all APIs End

// Local path all APIs start

// export const mappingData = {
//   //familyApi: `${HKVPY}/api/v1/counts/families`,
//   //districtWiseFilter: `${HKVPY}/api/v1/counts/district`,
//   //blockwiseFilter: `${HKVPY}/api/v1/counts/block`,
//   //wardwiseFilter: `${HKVPY}/api/v1/counts/ward`,
//   //http://127.0.0.1:8000/api_tree_survey_hkvpy/get_gdb_tree
//   TreeData: "/treeapi/api_tree_survey_hkvpy/get_tree",
//   SurveyedData:"/treeapi/api_tree_survey_hkvpy/get_gdb_tree"
// };

// Local path all APIs End

export const layerapi = {

  StateDistrictBlockVillageLayerApi: "https://hsacggm.in/server/rest/services/PMFBY_Survey/Boundaries/MapServer/",
  //villageBoundaryLayer: "https://hsacggm.in/server/rest/services/Onemap_Haryana/Village_LGD/MapServer/0",
  // blockBoundaryLayer: "https://hsacggm.in/server/rest/services/Onemap_Haryana/Block_LGD/MapServer/0",
  // haryanaBoundary: "https://hsacggm.in/server/rest/services/Onemap_Haryana/Haryana_Basemap/MapServer/",  
  //stateBoundary: "https://onemapdepts.gmda.gov.in/server1/rest/services/Boundary_GMDA/GMDA_Boundary/MapServer/",
  // tehsilBoundaryLayer:"https://hsacggm.in/server/rest/services/Onemap_Haryana/Tehsil_LGD/MapServer/0",
  //cridLayerApi:"https://hsacggm.in/server/rest/services/CRID/Family_ID_Mapping/MapServer/",
};



// ============================================================
// FETCH DISTRICTS
// ============================================================

export const fetchDistricts = async () => {
  const url =
    `${layerapi.villageBoundaryLayer}/query` +
    `?where=1%3D1` +
    `&returnGeometry=false` +
    `&outFields=n_d_code,n_d_name` +
    `&returnDistinctValues=true` +
    `&orderByFields=n_d_name` +
    `&f=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `District API failed: ${response.status}`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data?.features)) {
    console.error("District API Response:", data);
    return [];
  }

  const seen = new Set();

  return data.features.reduce((acc, feature) => {
    const code = feature.attributes?.n_d_code;
    const name = feature.attributes?.n_d_name;

    if (
      code !== null &&
      code !== undefined &&
      name &&
      !seen.has(String(code))
    ) {
      seen.add(String(code));

      acc.push({
        label: name,
        value: {
          code: code,
          name: name,
        },
      });
    }

    return acc;
  }, []);
};


// ============================================================
// FETCH TEHSILS
// ============================================================

export const fetchTehsils = async (districtCode) => {
  if (
    districtCode === null ||
    districtCode === undefined ||
    districtCode === ""
  ) {
    return [];
  }

  const safeCode = String(districtCode).replace(/'/g, "''");

  const where = encodeURIComponent(
    `N_D_CODE='${safeCode}'`
  );

  const url =
    `${layerapi.villageBoundaryLayer}/query` +
    `?where=${where}` +
    `&returnGeometry=false` +
    `&outFields=n_t_code,n_t_name` +
    `&returnDistinctValues=true` +
    `&orderByFields=n_t_name` +
    `&f=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Tehsil API failed: ${response.status}`
    );
  }

  const data = await response.json();

  console.log("Tehsil Response:", data);

  if (!Array.isArray(data?.features)) {
    return [];
  }

  const seen = new Set();

  return data.features.reduce((acc, feature) => {
    const code = feature.attributes?.n_t_code;
    const name = feature.attributes?.n_t_name;

    if (
      code !== null &&
      code !== undefined &&
      name &&
      !seen.has(String(code))
    ) {
      seen.add(String(code));

      acc.push({
        label: name,
        value: {
          code: code,
          name: name,
        },
      });
    }

    return acc;
  }, []);
};


// ============================================================
// FETCH VILLAGES
// ============================================================

export const fetchVillages = async (tehsilCode) => {
  if (
    tehsilCode === null ||
    tehsilCode === undefined ||
    tehsilCode === ""
  ) {
    return [];
  }

  const safeCode = String(tehsilCode).replace(/'/g, "''");

  const where = encodeURIComponent(
    `N_T_CODE='${safeCode}'`
  );

  const url =
    `${layerapi.villageBoundaryLayer}/query` +
    `?where=${where}` +
    `&returnGeometry=false` +
    `&outFields=N_V_CODE,N_V_NAME` +
    `&returnDistinctValues=true` +
    `&orderByFields=N_V_NAME` +
    `&f=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Village API failed: ${response.status}`
    );
  }

  const data = await response.json();

  console.log("Village Response:", data);

  if (!Array.isArray(data?.features)) {
    return [];
  }

  const seen = new Set();

  return data.features.reduce((acc, feature) => {
    const code =
      feature.attributes?.N_V_CODE ??
      feature.attributes?.n_v_code;

    const name =
      feature.attributes?.N_V_NAME ??
      feature.attributes?.n_v_name;

    if (
      code !== null &&
      code !== undefined &&
      name &&
      !seen.has(String(code))
    ) {
      seen.add(String(code));

      acc.push({
        label: name,
        value: {
          code: code,
          name: name,
        },
      });
    }

    return acc;
  }, []);
};