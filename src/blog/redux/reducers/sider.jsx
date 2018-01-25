import * as actionTypes from "../actionTypes/index";

function reducer_sider(state, action) {
    if (!state) {
        state = {
            iscollapsed: false
        }
    }

    switch (action.type) {
        case actionTypes.TOGGLESIDER:
            return Object.assign({}, state, {
                iscollapsed: action.collapsed
            });
        default:
            return state;
    }

}

export default reducer_sider;