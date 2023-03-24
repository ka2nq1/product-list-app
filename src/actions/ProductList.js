import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, FILTER_PRODUCTS } from "../constants/ProductList";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});

export const updateSearchQuery = (searchQuery) => ({
  type: FILTER_PRODUCTS,
  payload: searchQuery,
});
