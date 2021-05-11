// Lets get from   https://fakestoreapi.com/

// curl https://fakestoreapi.com/products/ -o product-list.js

// Later we will fetch dynamically via fetch|axios
import productList from "./product-list";
const PRODUCT_DATA = productList;

export default PRODUCT_DATA;
