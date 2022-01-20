import { FetchUSerFailure, FetchUserFailurePayload, FetchUserRequest, FetchUserSuccess, FetchUserSuccessPayload, SetPatternPayload, SetUserPattern } from "../types/user";
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, SET_USER_PATTERN } from "./actionTypes";


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

export const setUserPattern = (payload: SetPatternPayload): SetUserPattern => ({
    type: SET_USER_PATTERN,
    payload
})