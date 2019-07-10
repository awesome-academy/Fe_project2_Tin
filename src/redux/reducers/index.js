import { combineReducers } from "redux";
import showProduct from "./getHotProduct";
import authUser from "./authUser";
import getHistory from "./getHistory";
import getUsers from "./getUsers";
import getOneUser from "./getOneUser";
import EditUser from "./EditUser";

export default combineReducers({
    allUser: getUsers,
    dataHotProduct: showProduct,
    auth: authUser,
    history: getHistory,
    dataOneUser: getOneUser,
    editAccount: EditUser
});
