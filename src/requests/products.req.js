import { loadProducts } from "../store/reducers/products";

export const load_products = (category) => {
  return dispatch => {
    fetch(`http://localhost:3333/categories/${category}`)
      .then(resp => resp.json())
      .then(json => dispatch(loadProducts(json)))
  }
}