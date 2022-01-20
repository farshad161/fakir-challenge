import {
    FetchUSerFailure, FetchUserFailurePayload, FetchUserRequest, FetchUserSuccess,
    FetchUserSuccessPayload, SetUserPatternPayload, SetUserPattern, SetSuggestedUsers, SetSuggestedUsersPayload, SetUserTabIndex, SetUserTabIndexPayload
} from "../types/user";
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, SET_SUGGESTED_USERS, SET_USER_PATTERN, SET_USER_TAB_INDEX } from "./actionTypes";


export const fetchUserRequest = (): FetchUserRequest => ({
    type: FETCH_USER_REQUEST
})

export const fetchUserSuccess = (payload: FetchUserSuccessPayload): FetchUserSuccess => ({
    type: FETCH_USER_SUCCESS,
    payload,
})

export const fetchUserFailure = (payload: FetchUserFailurePayload): FetchUSerFailure => ({

    type: FETCH_USER_FAILURE,
    payload
})

export const setUserPattern = (payload: SetUserPatternPayload): SetUserPattern => ({
    type: SET_USER_PATTERN,
    payload
})

export const setSuggestedUsers = (payload: SetSuggestedUsersPayload): SetSuggestedUsers => ({
    type: SET_SUGGESTED_USERS,
    payload
})

export const setUserTabIndex = (payload: SetUserTabIndexPayload): SetUserTabIndex => ({
    type: SET_USER_TAB_INDEX,
    payload
})

