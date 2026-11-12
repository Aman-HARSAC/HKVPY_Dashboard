
import React from "react";

const StatCard = ({ item }) => (
  <div
    className={`
      ${item.bgColor}
      flex w-full min-w-0 flex-col items-center justify-center
      min-h-[145px] sm:min-h-[170px] lg:min-h-[185px]
      rounded-2xl border border-white/80
      px-1 py-4 sm:px-3 sm:py-5 lg:px-4
      text-center shadow-md
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
    `}
  >
    {/* Icon */}
    <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/85 shadow-sm sm:mb-3 sm:h-14 sm:w-14">
      <i
        className={`${item.icon} ${item.color} text-xl sm:text-2xl lg:text-3xl`}
        aria-hidden="true"
      />
    </div>

    {/* Heading */}
    <p
      className="w-full truncate text-[10px] font-semibold text-slate-700 sm:text-sm lg:text-base"
      title={item.heading}
    >
      {item.heading}
    </p>

    {/* Count */}
    <p
      className={`mt-2 text-2xl font-extrabold leading-none sm:text-4xl lg:text-5xl ${item.color}`}
    >
      {Number(item.value ?? 0).toLocaleString("en-IN")}
    </p>
  </div>
);

export default function CountCards({
  totalRecords = 0,
  surveyedTreeCount = 0,
  approvedTreeCount = 0,
  pendingTreeCount = 0,
}) {
  const cards = [
    {
      heading: "Total Tree Count",
      value: totalRecords,
      color: "text-green-700",
      bgColor: "bg-gradient-to-br from-green-100 to-green-200",
      icon: "pi pi-sitemap",
    },
    {
      heading: "Surveyed Trees",
      value: surveyedTreeCount,
      color: "text-blue-700",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      icon: "pi pi-map",
    },
    {
      heading: "Approved Trees",
      value: approvedTreeCount,
      color: "text-emerald-700",
      bgColor: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      icon: "pi pi-check-circle",
    },
    {
      heading: "Pending Trees",
      value: pendingTreeCount,
      color: "text-orange-700",
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
      icon: "pi pi-exclamation-circle",
    },
  ];

  return (
    <div className="mx-auto grid w-full grid-cols-4 items-stretch gap-2 sm:gap-3 lg:gap-4">
      {cards.map((item) => (
        <StatCard key={item.heading} item={item} />
      ))}
    </div>
  );
}
