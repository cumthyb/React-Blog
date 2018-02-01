import * as actionTypes from "../actionTypes/index";

function reducer_login(state, action) {
    if (!state) {
        state = {
            adminAccess: false,
            loginFormVisible:false
        }
    }

    switch (action.type) {
        case actionTypes.ChangeAdminAccess:
            return Object.assign({}, state, {
                adminAccess: action.assessToAdmin
            });
            case actionTypes.CloseUserLoginForm:
            return Object.assign({}, state, {
                loginFormVisible: action.loginFormVisible
            });
        default:
            return state;
    }

}

export default reducer_login;