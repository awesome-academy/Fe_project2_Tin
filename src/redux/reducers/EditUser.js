import axios from "axios";
export default (newUser = {}, action) => {
    switch (action.type) {
        case "EDIT_PROFILE":
            newUser = {
                id: action.payload.id,
                username: action.payload.newUser,
                password: action.payload.newPass,
                dataOrder: [],
                email: action.payload.newEmail
            };
            axios.put(`http://localhost:3000/users/${action.payload.id}`, newUser);
            return newUser;

        default:
            return newUser;
    }
};
