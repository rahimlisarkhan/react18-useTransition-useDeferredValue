export const getProducts = () => {
  let data = [];
  for (let i = 0; i < 10000; i++) {
    data = [...data, `Product-${i + 1}`];
  }

  return data;
};
