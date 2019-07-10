import { combineReducers } from "redux";
import showProduct from "./getHotProduct";
import authUser from "./authUser";

export default combineReducers({
    dataHotProduct: showProduct,
    auth: authUser
});
