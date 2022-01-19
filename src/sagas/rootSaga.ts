import { fork, all } from 'redux-saga/effects'
import { usersSaga } from "./userSaga";

export function* rootSaga() {

    yield all([fork(usersSaga)]);
}