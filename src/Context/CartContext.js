import React, { createContext, useReducer } from "react";
import { sumItems, CartReducer } from "./CartReducer";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const INITIAL_STATE = { cartItems: storage, ...sumItems(storage) };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const contextValue = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
