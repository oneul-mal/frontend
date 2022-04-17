import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import contents, { contentsSaga } from "./contents";

const rootReducer = combineReducers({ auth, contents });
export function* rootSaga() {
  yield all([authSaga(), contentsSaga()]);
}

export default rootReducer;
