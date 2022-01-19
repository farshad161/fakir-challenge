import { ActionTypes } from "./types";




export interface Users {
    id: number,
    name: string,
    username: string,
}

export interface FetchUsersAction {
    type: ActionTypes.fetchUsers,
    payload: Users[]
}

export const fetchUsers = () => ({ type: ActionTypes.fetchUsers })
