import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import { rootSaga } from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

//  Watchar saga setup
sagaMiddleware.run(rootSaga);

export { store };