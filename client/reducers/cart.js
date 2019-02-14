import { ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART } from "../actions";

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return getNewCart(state, action.id);
    case DELETE_FROM_CART:
      return state.filter(item => item.id !== action.id);
    case UPDATE_CART:
      return action.cart;
    default:
      return state;
  }
};

function getNewCart(cart, id) {
  let exists = false;
  const newCart = cart.map(item => {
    if (item.id === id) {
      item.quantity += 1;
      exists = true;
    }
    return item;
  });

  if (exists) {
    return newCart;
  } else {
    newCart.push({ id: id, quantity: 1 });
    return newCart;
  }
}

export default cart;
