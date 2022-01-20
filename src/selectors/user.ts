import { createSelector } from 'reselect';
import { appState } from '../reducers/rootReducer';

const getPending = (state: appState) => state.user.pending;

const getUsers = (state: appState) => state.user.users;

const getError = (state: appState) => state.user.error;

export const getUserSelector = createSelector(getUsers, (users) => users)

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErorrSelector = createSelector(getError, (error) => error);