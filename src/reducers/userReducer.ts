
import { ActionTypes } from "../actions/types";
import { Users, FetchUsersAction } from '../actions';


export const userReducer = (state: Users[], action: FetchUsersAction) => {
    switch (action.type) {
        case ActionTypes.fetchUsersRequest:
            return { users: action.payload };
        default:
            return state;
    }

}