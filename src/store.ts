import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {
  useSelector as _useSelector,
  useDispatch as _useDispatch,
} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { rootReducer } from "./reducer";
import { rootSaga } from "./sagas";
import { initialState } from "./state";
import type { State } from "./state";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;

export const configureStore = (state = initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    state,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export const useSelector: TypedUseSelectorHook<State> = _useSelector;

export const useDispatch = () =>
  _useDispatch<ReturnType<typeof configureStore>["dispatch"]>();
