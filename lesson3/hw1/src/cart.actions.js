export const ADD_PRODUCT = 'PRODUCTS/ADD_PRODUCT';
export const DELETE_PRODUCT = 'PRODUCTS/DELETE_PRODUCT';

export const addProduct = productData => {
  return {
    type: ADD_PRODUCT,
    payload: {
      productData,
    },
  };
};

export const removeProduct = id => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};
