import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { FETCH_USER_REQUEST } from '../actions/actionTypes';
import { IUser } from '../types/user';
import { fetchUserFailure, fetchUserSuccess } from '../actions';

const URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = () => axios.get<IUser[]>(URL);

function* fetchUserSaga() {
    try {

        const response: AxiosResponse<IUser[]> = yield call(getUsers);
        const { data } = response;
        yield put(fetchUserSuccess({ users: data }))

    } catch (e: unknown) {

        if (e instanceof Error)
            yield put(fetchUserFailure({ error: e.message }))
    }
}

function* userSaga() {

    yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)])
}

export default userSaga;