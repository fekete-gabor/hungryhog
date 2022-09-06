export const getUniqueValues = (data, type, all = false) => {
  let unique = [...new Set(data.map((item) => item.attributes[type]))];

  if (all === true) unique.unshift("összes");

  return unique;
};

// export const getUniqueValues = (data, type, result) => {
//   let unique = [...new Set(data.map((item) => item.attributes[type]))];

//   if (result) unique.unshift("összes");

//   return unique;
// };
