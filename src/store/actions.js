import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("https://localhost:44309/api/Product/getAll").then((response) => {
    commit("SET_PRODUCTS", response.data);
    commit("SET_FILTER_PRODUCTS", response.data);
    console.log("vuex", response);
  });
};

export const getProduct = ({ commit }, productId) => {
  axios
    .get(`https://localhost:44309/api/Product/GetById/${productId}`)
    .then((response) => {
      commit("SET_PRODUCT", response.data.result);
      commit("SET_PRODUCT_RELATION", response.data.relation);
      console.log("vvv", response.data);
    });
};

export const getCategoryId = ({ commit }, categoryId) => {
  axios
    .get(
      `https://localhost:44309/api/Product/GetProductByCategory/${categoryId}`
    )
    .then((response) => {
      commit("SET_CATEGORY", response.data.result.items);
      commit("SET_CATEGORY_RELATION", response.data.relation);
    });
};

export const getCategories = ({ commit }) => {
  axios.get("https://localhost:44309/api/Category/getAll").then((response) => {
    commit("SET_CATEGORIES", response.data);
  });
};

export const addToCart = ({ commit }, { product, quantity }) => {
  commit("ADD_TO_CART", { product, quantity });
};

export const addQuantity = ({ commit }, quantity) => {
  commit("ADD_QUANTITY", quantity);
};

export const user = ({ commit }, user) => {
  commit("USER", user);
};

export const remove_cart = ({ commit }, cart) => {
  commit("REMOVE_CART", cart);
};

export const userId = ({ commit }, id) => {
  commit("USER_ID", id);
};
