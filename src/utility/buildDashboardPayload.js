export const buildDashboardPayload = (filters) => {
  const payload = {};

  const toTitleCase = (str) => {
    return str
      ?.toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  // const getValue = (val) => {
  //   if (!val) return null;
  //   if (typeof val === "object") return val.value || val.name;
  //   return val;
  // };

  // if (filters.district) {
  //   payload.district = [getValue(filters.district).toUpperCase()];
  // }

  // if (filters.district) {
  //   payload.district = [filters.district.toUpperCase()];
  // }

  if (filters.district) {
    payload.district = Array.isArray(filters.district) ? filters.district.map((d) => d.toUpperCase()) : [filters.district.toUpperCase()];
  }

  if (filters.block) {
    payload.blocktown = [filters.block.name];
  }

  if (filters.ward) {
    payload.wardvillage = [toTitleCase(filters.ward.name)];
  }

  if (filters.casteCategory) {
    payload.castcategory = [filters.casteCategory];
  }

  if (filters.casteCategoryVerify) {
    payload.castcategoryverify = [filters.casteCategoryVerify];
  }

  if (filters.gender) {
    payload.gender = [filters.gender];
  }

  if (filters.divyang) {
    payload.isdivyang = [filters.divyang];
  }

  if (filters.income) {
    payload.familyincome = filters.income[1] ? [filters.income[0], filters.income[1]] : [filters.income[0]];
  }

  if (filters.age) {
    payload.age = filters.age[1] ? [filters.age[0], filters.age[1]] : [filters.age[0]];
  }

  if (filters.maritalStatus) {
    payload.maritalstatus = [filters.maritalStatus];
  }

  if (filters.engagement) {
    payload.engagement = [filters.engagement];
  }

  if (filters.dobVerify) {
    payload.dobverify = [filters.dobVerify];
  }

  return payload;
};
