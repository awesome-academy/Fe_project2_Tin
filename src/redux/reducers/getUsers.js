export default (allUsers = [], action) => {
    switch (action.type) {
        case "GET_USERS":
            allUsers = action.payload;
            return allUsers;

        default:
            return allUsers;
    }
};
