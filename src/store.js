import { createStore } from 'redux'
import { combineReducers } from 'redux'

const initialState = {
  
}

const productsReducer = function(state=[], action) {
  return state;
}

const ADD_TO_CART = 'ADD_TO_CART';

const cartReducer = 
// 定义action
function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost}
  }
}

const allReducers = {
  product: productsReducer,
  shoppingCart: cartReducer,
}
const rootReducer = combineReducers(allReducers);

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addToCart('coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('juice 2L', 1, 250));
unsubscribe();