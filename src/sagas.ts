import { put, delay } from "redux-saga/effects";

import { TICK_INTERVAL_MS } from "./constants";
import { worldTick } from "./actions";

export function* rootSaga() {
  while (true) {
    yield delay(TICK_INTERVAL_MS);
    yield put(worldTick());
  }
}
