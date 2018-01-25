import * as actionTypes from "../actionTypes/index";

function reducer_turnpage(state, action) {
    if (!state) {
        state = {
            currentpage: 1
        }
    }

    switch (action.type) {
        case actionTypes.TurnPage:
            return Object.assign({}, state, {
                currentpage: action.currentpage
            });
        default:
            return state;
    }

}

export default reducer_turnpage;