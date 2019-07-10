export default (authAdmin = false, action) => {
    switch (action.type) {
        case "GET_ADMIN":
            const listAdmin = action.payload;
            const comingAdmin = action.comingAdmin;
            listAdmin.forEach(account => {
                if (account.adminname === comingAdmin.adminname && account.password === comingAdmin.password) {
                    authAdmin = true;
                    return authAdmin;
                }
            });
            return authAdmin;

        default:
            return authAdmin;
    }
};
