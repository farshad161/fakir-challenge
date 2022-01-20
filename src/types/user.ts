import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../actions/actionTypes';

export interface IUser {
    id: number,
    username: string,
    name: string
}

export interface UserState {

    pending: boolean,
    users: IUser[],
    error: string | null
}

export interface FetchUserSuccessPayload {

    users: IUser[]

}

export interface FetchUserFailurePayload {
    error: string
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

export type UserActions = FetchUSerFailure | FetchUserSuccess | FetchUserRequest;