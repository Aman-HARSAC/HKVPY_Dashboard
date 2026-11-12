import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AccordionSection = () => {
  const filters = useSelector(
    (state) => state.dashboardFilters
  );

  const navigate = useNavigate();

  return (
    <div
      className="
        w-80
        rounded-xl
        p-4
        max-h-[58vh]
        2xl:max-h-[65vh]
        2xl:w-md
        overflow-y-auto
        white-glass-bg
      "
    >
      {/* =====================================================
          SELECTED LOCATION HEADING
      ====================================================== */}
      <h2
        className="
          text-xl
          2xl:text-2xl
          font-bold
          text-green-800
          border-b
          border-green-200
          pb-2
          mb-4
        "
      >
        {filters.district
          ? filters.district
          : "All District Details"}

        {filters.block
          ? ` → ${filters.block.name}`
          : null}

        {filters.ward
          ? ` → ${filters.ward.name}`
          : null}
      </h2>

      {/* =====================================================
          PREVIOUSLY SURVEYED TREES
      ====================================================== */}
      <div
        onClick={() =>
          navigate("/previously-surveyed-trees")
        }
        className="
          cursor-pointer
          bg-gradient-to-r
          from-emerald-700
          via-green-600
          to-lime-500
          text-white
          rounded-2xl
          p-4
          mb-4
          shadow-lg
          hover:shadow-2xl
          hover:scale-[1.02]
          transition-all
          duration-300
        "
      >
        <div className="flex items-center gap-4">

          {/* ICON */}
          <div
            className="
              w-14
              h-14
              rounded-full
              bg-white/20
              flex
              items-center
              justify-center
            "
          >
            <i className="pi pi-sitemap text-2xl"></i>
          </div>

          {/* TEXT */}
          <div>
            <h3 className="font-bold text-lg">
              Previously Surveyed Trees
            </h3>

            <p className="text-green-100 text-sm">
              View Surveyed Tree Records
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};