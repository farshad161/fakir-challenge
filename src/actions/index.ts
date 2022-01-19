import { ActionTypes } from "./types";



// const url = 'https://jsonplaceholder.typicode.com/users';

export interface Users {
    id: number,
    name: string,
    username: string,
}

export interface FetchUsersAction {
    type: ActionTypes.fetchUsersRequest,
    payload: Users[]
}

export const fetchUsers = () => {

    return {
        type: ActionTypes.fetchUsersRequest,
        payload: []
    }
}