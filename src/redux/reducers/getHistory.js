export default (historyPay = null, action) => {
    switch (action.type) {
        case "GET_HISTORY":
            return action.payload;
        default:
            return historyPay;
    }
};
