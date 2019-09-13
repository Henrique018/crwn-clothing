import { userActionType } from "./user.action.types";


export const setCurrentUser = user =>({
    type: userActionType.SET_CURRENT_USER,
    payload:user
});