import { combineReducers } from "redux";
import showProduct from "./getHotProduct";

export default combineReducers({
    dataHotProduct: showProduct
});
