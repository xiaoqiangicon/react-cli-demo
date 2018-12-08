import { combineReducers } from 'redux';
import productReducer from './product.js'
import cart from './cart.js'

const allReducers = {
  products: productReducer,
  cart
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;