
import { RequestTypes } from "../sagas/types";
import { Users } from '../actions';


export const userReducer = (state: Users[], action: any) => {
    switch (action.type) {
        case RequestTypes.fetchUserRequest:
            return { users: action.payload };
        default:
            return state;
    }

}