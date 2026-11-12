export const StatCard = ({ item }) => {
  const { heading, value, icon, color, bg } = item;

  return (
    <div className={`h-full min-w-54 2xl:min-w-80 bg-transparent p-2 rounded-xl border-[1.5px] border-gray-400`}>
      {/* <div className="flex items-center justify-between h-full">
        <i className={`pi ${icon} mr-2 text-3xl ${color}`} />
        <div className="flex flex-col xl:flex-row justify-between items-center w-full">
          <div className={` text-lg md:text-xs lg:text-xl 2xl:text-lg font-bold ${color}`}>{heading}</div>
          <div className={` text-3xl md:text-md lg:text-2xl 2xl:text-5xl font-bold ${color}`}>{value ?? 0}</div>
        </div>
      </div> */}
      <div className="flex gap-2 items-center w-full">
        <i className={`pi ${icon} border border-gray-400 rounded-lg p-2 ${bg}`} />
        <div className={`${color} font-bold text-md 2xl:text-lg text-center w-full`}>{heading}</div>
      </div>
      <div className={`${color} text-xl 2xl:text-3xl text-center font-bold`}>{value ?? 0}</div>
    </div>
  );
};
