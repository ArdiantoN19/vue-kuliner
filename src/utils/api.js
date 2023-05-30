import faker from "./fakerData";

const api = (() => {
  const getBestProducts = async () => {
    const response = await faker.bestProducts();
    const responseJson = await JSON.parse(response);
    return responseJson;
  };

  const getProducts = async () => {
    const response = await faker.products();
    const responseJson = await JSON.parse(response);
    return responseJson;
  };

  const getCarts = async () => {
    const response = await faker.carts();
    const responseJson = await JSON.parse(response);
    return responseJson;
  };

  const getDetailProduct = async (id) => {
    const response = await faker.products();
    let responseJson = await JSON.parse(response);
    responseJson = responseJson.data.find((res) => res.id === id);
    return responseJson;
  };

  const postAddCart = async (data) => {
    const response = await faker.addCart(data);
    const responseJson = await JSON.parse(response);
    return responseJson;
  };

  const getOrders = async () => {
    const response = await faker.orders();
    const responseJson = await JSON.parse(response);
    return responseJson;
  };

  const postAddOrder = async (dataOrder) => {
    const response = await faker.addOrder(dataOrder);
    const responseJson = await JSON.parse(response);
    if (responseJson.status !== "success") {
      throw new Error(responseJson);
    }
    return responseJson.data;
  };

  return {
    getBestProducts,
    getProducts,
    getCarts,
    getDetailProduct,
    postAddCart,
    getOrders,
    postAddOrder,
  };
})();

export default api;
