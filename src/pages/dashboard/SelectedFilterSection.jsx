import { useSelector, useDispatch } from "react-redux";
import {
  setFilter,
  applyFilters,
  setSelectedAccordionFilter,
} from "../../features/filterslice";

/* =========================================================
   FILTER LABELS
========================================================= */

const LABELS = {
  district: "District",
  block: "Tehsil",
  village: "Village",
  treeId: "Tree ID",
  startDate: "Start Date",
  endDate: "End Date",
  age: "Age",
  treeSpecies: "Tree Species",
};

/* =========================================================
   ALLOWED DISTRICTS
========================================================= */

const allowedDistricts = ["HISAR", "BHIWANI"];

/* =========================================================
   CHECK VALUE
========================================================= */

const hasValue = (value) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return false;
  }

  if (
    Array.isArray(value) &&
    value.length === 0
  ) {
    return false;
  }

  return true;
};

/* =========================================================
   FORMAT DATE
========================================================= */

const formatDate = (value) => {
  if (!value) return "";

  const date =
    value instanceof Date
      ? value
      : new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

/* =========================================================
   DISPLAY VALUE
========================================================= */

const getDisplayValue = (value, key) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "";
  }

  /* =======================================================
     TREE ID
  ======================================================= */

  if (key === "treeId") {
    return String(value);
  }

  /* =======================================================
     AGE RANGE
  ======================================================= */

  if (
    key === "age" &&
    Array.isArray(value)
  ) {
    if (value.length >= 2) {
      if (Number(value[1]) >= 150) {
        return `${value[0]} Years & Above`;
      }

      return `${value[0]} - ${value[1]} Years`;
    }
  }

  /* =======================================================
     DATE
  ======================================================= */

  if (
    key === "startDate" ||
    key === "endDate"
  ) {
    return formatDate(value);
  }

  /* =======================================================
     ARRAY
  ======================================================= */

  if (Array.isArray(value)) {
    return value.join(" - ");
  }

  /* =======================================================
     OBJECT
  ======================================================= */

  if (typeof value === "object") {
    if ("label" in value) {
      return String(value.label);
    }

    if ("name" in value) {
      return String(value.name);
    }

    if ("value" in value) {
      const objectValue = value.value;

      if (
        typeof objectValue === "object" &&
        objectValue !== null
      ) {
        if ("label" in objectValue) {
          return String(objectValue.label);
        }

        if ("name" in objectValue) {
          return String(objectValue.name);
        }
      }

      return String(objectValue);
    }

    return "";
  }

  return String(value);
};

/* =========================================================
   SELECTED FILTER SECTION
========================================================= */

const SelectedFilterSection = () => {
  const dispatch = useDispatch();

  const filters = useSelector(
    (state) => state.dashboardFilters
  );

  /* =======================================================
     CLEAR INDIVIDUAL FILTER
  ======================================================= */

  const clearFilter = (key) => {
    /*
      Dependency:

      District
          ↓
      Tehsil
          ↓
      Village

      Tree ID is independent.

      Date, Age and Species are independent.
    */

    const clearMap = {
      /* -----------------------------------------------
         DISTRICT
      ------------------------------------------------ */

      district: [
        "district",
        "districtCode",

        "block",
        "blockCode",

        "village",
        "villageCode",
      ],

      /* -----------------------------------------------
         TEHSIL
      ------------------------------------------------ */

      block: [
        "block",
        "blockCode",

        "village",
        "villageCode",
      ],

      /* -----------------------------------------------
         VILLAGE
      ------------------------------------------------ */

      village: [
        "village",
        "villageCode",
      ],

      /* -----------------------------------------------
         TREE ID
      ------------------------------------------------ */

      treeId: [
        "treeId",
      ],

      /* -----------------------------------------------
         START DATE
      ------------------------------------------------ */

      startDate: [
        "startDate",
      ],

      /* -----------------------------------------------
         END DATE
      ------------------------------------------------ */

      endDate: [
        "endDate",
      ],

      /* -----------------------------------------------
         AGE
      ------------------------------------------------ */

      age: [
        "age",
      ],

      /* -----------------------------------------------
         TREE SPECIES
      ------------------------------------------------ */

      treeSpecies: [
        "treeSpecies",
      ],
    };

    const keysToClear =
      clearMap[key] || [key];

    /* =====================================================
       CLEAR FILTER VALUES
    ===================================================== */

    keysToClear.forEach((filterKey) => {
      dispatch(
        setFilter({
          key: filterKey,
          value: null,
        })
      );
    });

    /* =====================================================
       CLEAR ACCORDION SELECTION
    ===================================================== */

    dispatch(
      setSelectedAccordionFilter({
        key: null,
        value: null,
      })
    );

    /* =====================================================
       APPLY UPDATED FILTERS
    ===================================================== */

    dispatch(applyFilters());
  };

  /* =======================================================
     DISTRICT VALIDATION
  ======================================================= */

  const selectedDistrictRaw =
    filters?.district;

  let selectedDistrict =
    selectedDistrictRaw;

  /* Array */
  if (Array.isArray(selectedDistrictRaw)) {
    selectedDistrict =
      selectedDistrictRaw[0];
  }

  /* Object */
  if (
    typeof selectedDistrict ===
    "object" &&
    selectedDistrict !== null
  ) {
    selectedDistrict =
      selectedDistrict?.label ||
      selectedDistrict?.name ||
      selectedDistrict?.value ||
      "";
  }

  const isInvalidDistrict =
    selectedDistrict &&
    !allowedDistricts.includes(
      String(selectedDistrict).toUpperCase()
    );

  /* =======================================================
     SELECTED FILTERS
  ======================================================= */

  const selectedFilters =
    Object.keys(LABELS)
      .map((key) => ({
        key,
        label: LABELS[key],
        value: filters?.[key],
      }))
      .filter(({ value }) =>
        hasValue(value)
      );

  /* =======================================================
     NO FILTER
  ======================================================= */

  if (!selectedFilters.length) {
    return null;
  }

  /* =======================================================
     INVALID DISTRICT
  ======================================================= */

  if (isInvalidDistrict) {
    return (
      <div
        className="
          relative
          border-[1.5px]
          border-red-300
          rounded-xl
          p-4
          pt-6
          max-w-2xl
          2xl:max-w-full
          bg-red-50/30
        "
      >
        <span
          className="
            absolute
            -top-3
            left-3
            bg-white
            px-2
            text-sm
            font-semibold
            rounded-xl
            text-red-500
          "
        >
          Alert
        </span>

        <div
          className="
            text-red-600
            font-semibold
            text-center
          "
        >
          No Data Available for{" "}
          {selectedDistrict}
        </div>
      </div>
    );
  }

  /* =======================================================
     NORMAL UI
  ======================================================= */

  return (
    <div
      className="
        relative
        border-[1.5px]
        border-gray-400
        rounded-xl
        p-4
        pt-6
        max-w-2xl
        2xl:max-w-250
        bg-white
      "
    >
      {/* =================================================
          TITLE
      ================================================= */}

      <span
        className="
          absolute
          -top-3
          left-3
          bg-white
          px-2
          text-sm
          font-semibold
          rounded-xl
          text-gray-700
        "
      >
        Applied Filters
      </span>

      {/* =================================================
          FILTER ITEMS
      ================================================= */}

      <div className="flex flex-wrap gap-2">
        {selectedFilters.map(
          ({ key, label, value }) => (
            <div
              key={key}
              className="
                flex
                items-center
                gap-1
                bg-white
                border
                border-gray-300
                rounded-full
                px-3
                py-1.5
                text-sm
                shadow-sm
                hover:border-green-400
                transition
              "
            >
              {/* LABEL */}

              <span
                className="
                  font-semibold
                  text-gray-800
                "
              >
                {label}:
              </span>

              {/* VALUE */}

              <span
                className="
                  text-gray-700
                  max-w-[220px]
                  truncate
                "
                title={getDisplayValue(
                  value,
                  key
                )}
              >
                {getDisplayValue(
                  value,
                  key
                )}
              </span>

              {/* CLEAR */}

              <button
                type="button"
                onClick={() =>
                  clearFilter(key)
                }
                className="
                  ml-1
                  text-gray-400
                  hover:text-red-600
                  transition
                  flex
                  items-center
                  justify-center
                "
                title={`Clear ${label}`}
              >
                <i className="pi pi-times-circle text-xs cursor-pointer" />
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SelectedFilterSection;