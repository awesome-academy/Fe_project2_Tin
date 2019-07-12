export default (authUser = false, action) => {
    switch (action.type) {
        case "GET_USER":
            const listUser = action.payload;
            const comingUser = action.comingUser;
            listUser.forEach(account => {
                if (account.username === comingUser.username && account.password === comingUser.password) {
                    authUser = true;
                    return authUser;
                }
            });
            return authUser;

        default:
            return authUser;
    }
};
