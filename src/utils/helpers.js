export const getUniqueValues = (data, type, all = false) => {
  let unique = [...new Set(data.map((item) => item.attributes[type]))];

  unique.sort((a, b) => {
    if (a) return a.localeCompare(b);
    return a;
  });

  if (all === true) unique.unshift("összes");

  return unique;
};
