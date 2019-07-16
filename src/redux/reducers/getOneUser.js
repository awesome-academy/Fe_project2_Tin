export default (oneUser = [], action) => {
    switch (action.type) {
        case "ONE_USER":
            oneUser = action.payload;
            return oneUser;

        default:
            return oneUser;
    }
};
