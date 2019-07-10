import axios from "axios";

export const getProduct = () => async dispatch => {
    const response = await axios(`http://localhost:3000/products`);
    dispatch({ type: "GET_HOT_PRODUCT", payload: response.data });
};

export const getUser = (username, password) => async dispatch => {
    const response = await axios(`http://localhost:3000/users`);
    dispatch({
        type: "GET_USER",
        payload: response.data,
        comingUser: { username: username, password: password }
    });
};
