import axios from "axios";

export const getProduct = () => async dispatch => {
    const response = await axios(`http://localhost:3000/products`);
    dispatch({ type: "GET_HOT_PRODUCT", payload: response.data });
};

export const getOneUser = idUser => async dispatch => {
    const response = await axios(`http://localhost:3000/users/${idUser}`);
    dispatch({ type: "ONE_USER", payload: response.data });
};

export const getAllUser = () => async dispatch => {
    const response = await axios(`http://localhost:3000/users`);
    dispatch({ type: "GET_USERS", payload: response.data });
};

export const getUser = (username, password) => async dispatch => {
    const response = await axios(`http://localhost:3000/users`);
    dispatch({
        type: "GET_USER",
        payload: response.data,
        comingUser: { username: username, password: password }
    });
};

export const getHistory = idHistory => async dispatch => {
    const response = await axios(`http://localhost:3000/history/${idHistory}`);
    dispatch({ type: "GET_HISTORY", payload: response.data });
};

export const pay = async idHistory => {
    await axios.put(`http://localhost:3000/history/${idHistory}`, {});
    return {
        type: "PAY"
    };
};

export const updateHistory = (idHistory, pays) => async dispatch => {
    return axios.put(`http://localhost:3000/history/${idHistory}`, {
        id: idHistory,
        pays
    });
};

export const signupAccount = newAccount => async => {
    return axios.post("http://localhost:3000/users", newAccount);
};
