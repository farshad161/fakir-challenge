import { all, put, call, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { Users } from '../actions';
import { RequestTypes } from './types';
import { ActionTypes } from '../actions/types';


const url = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => axios.get<Users[]>(url);


function* fetchUsersAsync() {

    const response: AxiosResponse<Users> = yield call(getUsers);
    yield put({ type: RequestTypes.fetchUserRequest, payload: response.data })

}

function* actionWatcher() {
    yield takeEvery(ActionTypes.fetchUsers, fetchUsersAsync)
}

export function* usersSaga() {
    yield all([actionWatcher()])
}