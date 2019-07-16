import { combineReducers } from "redux";
import showProduct from "./getHotProduct";
import authUser from "./authUser";
import getHistory from "./getHistory";
import getUsers from "./getUsers";
import getOneUser from "./getOneUser";

export default combineReducers({
    allUser: getUsers,
    dataHotProduct: showProduct,
    auth: authUser,
    history: getHistory,
    dataOneUser: getOneUser
});
