import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, SET_SUGGESTED_USERS, SET_USER_PATTERN } from '../actions/actionTypes';

export interface IUser {
    id: number,
    username: string,
    name: string
}

export interface UserState {

    pending: boolean,
    users: IUser[],
    error: string | null,
    pattern: string,
    suggestedUsers: IUser[]

}

export interface FetchUserSuccessPayload {
    users: IUser[]
}

export interface FetchUserFailurePayload {
    error: string
}

export interface SetUserPatternPayload {
    pattern: string
}

export interface setSuggestedUsersPayload {
    suggestedUsers: IUser[]
}

export type FetchUserRequest = {
    type: typeof FETCH_USER_REQUEST
}

export type FetchUserSuccess = {
    type: typeof FETCH_USER_SUCCESS;
    payload: FetchUserSuccessPayload;
}

export type FetchUSerFailure = {

    type: typeof FETCH_USER_FAILURE;
    payload: FetchUserFailurePayload;
}

export type SetUserPattern = {
    type: typeof SET_USER_PATTERN;
    payload: SetUserPatternPayload;
}

export type SetSuggestedUsers = {
    type: typeof SET_SUGGESTED_USERS,
    payload: setSuggestedUsersPayload
}

export type UserActions = FetchUSerFailure | FetchUserSuccess | FetchUserRequest | SetUserPattern | SetSuggestedUsers;