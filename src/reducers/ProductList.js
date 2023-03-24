import {ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, FILTER_PRODUCTS} from "../constants/ProductList";
  
  const initialState = {
    products: [], // список товарів
    searchQuery: '', // пошуковий запит
  };
  
  const productList = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
  
      case UPDATE_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload.id) {
              return action.payload;
            } else {
              return product;
            }
          }),
        };
  
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.payload
          ),
        };
  
      case FILTER_PRODUCTS:
        return {
          ...state,
          searchQuery: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default productList;
