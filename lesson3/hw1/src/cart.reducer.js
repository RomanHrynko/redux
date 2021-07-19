import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions.js';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      };

    case DELETE_PRODUCT:
      const newProducts = state.products.filter(product => product.id !== action.payload.id);
      return {
        ...state,
        products: newProducts,
      };

    default:
      return state;
  }
};

export default cartReducer;
