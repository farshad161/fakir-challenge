import { call, put } from 'redux-saga/effects';
import { Users } from '../../actions';
import { requestGetUsers } from '../requests/userRequest';


export function* handleGetUsers() {
    const response = yield call(requestGetUsers);


}