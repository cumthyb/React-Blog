import * as actionTypes from "../actionTypes/index"


export function togglesider(collapsed){
    return {
        type:actionTypes.TOGGLESIDER,
        collapsed
    }
}

export function turnpage(currentpage){
    return {
        type:actionTypes.TurnPage,
        currentpage
    }
}

export function changeAdminAccess(assessToAdmin){
    return{
        type:actionTypes.ChangeAdminAccess,
        assessToAdmin:assessToAdmin.assessToAdmin
    }
}