import { getProducts } from "api/data";

let dummyData = getProducts();

export const filterProduct = (filterTerm) => {
  if (!filterTerm) {
    return dummyData;
  }
  return dummyData.filter((product) => product.includes(filterTerm));
};
