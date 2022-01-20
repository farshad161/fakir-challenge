import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, SET_SUGGESTED_USERS, SET_USER_PATTERN, SET_USER_TAB_INDEX } from "../actions/actionTypes";
import { UserActions, UserState } from "../types/user";

const initialState: UserState = {
    pending: false,
    users: [],
    error: null,
    pattern: '',
    suggestedUsers: [],
    tabIndex: -1
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

        case SET_USER_PATTERN:
            return { ...state, pattern: action.payload.pattern, suggestedUsers: [] }

        case SET_SUGGESTED_USERS:
            return { ...state, suggestedUsers: action.payload.suggestedUsers }

        case SET_USER_TAB_INDEX:
            return { ...state, tabIndex: action.payload.tabIndex }

        default:
            return state;
    }
}