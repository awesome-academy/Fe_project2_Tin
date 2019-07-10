export default (allAdmins = [], action) => {
    switch (action.type) {
        case "GET_ADMINS":
            allAdmins = action.payload;
            return allAdmins;

        default:
            return allAdmins;
    }
};
