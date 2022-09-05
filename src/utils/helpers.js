export const getUniqueValues = (data, type) => {
  let unique = [...new Set(data.map((item) => item.attributes[type]))];
  unique = unique.filter((item) => item !== "összes");
  unique.unshift("összes");

  return unique;
};
