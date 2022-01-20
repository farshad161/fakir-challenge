import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../actions/actionTypes";
import { UserActions, UserState } from "../types/user";

const initialState: UserState = {
    pending: false,
    users: [],
    error: null
}


export const userReducer = (state = initialState, action: UserActions) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            return { ...state, pending: true }
        case FETCH_USER_SUCCESS:
            return {
                ...state, pending: false, users: action.payload.users, error: null
            }
        case FETCH_USER_FAILURE:
            return {
                ...state, pending: false, users: [], error: action.payload.error
            }
        default:
            return state;
    }
}