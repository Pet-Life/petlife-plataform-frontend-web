const storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantify,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantify, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({ ...action.payload, quantify: 1 });
      }
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantify++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "DECREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantify--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };

    default:
      return state;
  }
};
