export const getUniqueValues = (data, type) => {
  let unique = [...new Set(data.map((item) => item.attributes[type]))];

  return unique;
};
