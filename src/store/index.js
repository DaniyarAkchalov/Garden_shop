import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from "./reducers/categories";
import { productsReducer } from "./reducers/products";
import { productReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
