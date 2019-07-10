import axios from "axios";

export const getProduct = () => async dispatch => {
    const response = await axios(`http://localhost:3000/products`);
    dispatch({ type: "GET_HOT_PRODUCT", payload: response.data });
};
