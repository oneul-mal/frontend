import * as api from "../api/auth";
import { call, put, takeLatest } from "redux-saga/effects";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
// const LOGIN_FAILURE = "auth/LOGIN_FAILURE";
const LOGOUT = "auth/LOGOUT";
const LOGOUT_SUCCESS = "auth/LOGOUT_SUCCESS";
// // const LOGOUT_FAILURE = "auth/LOGOUT_FAILURE";
const REGISTER = "auth/REGISTER";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
// // const REGISTER_FAILURE = "auth/REGISTER_FAILURE";

export const login = (userInfo) => ({ type: LOGIN, userInfo });
export const logout = () => ({ type: LOGOUT });
export const register = (userInfo) => ({ type: REGISTER, userInfo });

function* loginSaga(action) {
  console.log(action);

  try {
    const result = yield call(api.login, action.userInfo);

    yield put({
      type: LOGIN_SUCCESS,
      payload: result,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  userId: "",
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.payload.userId,
      };
    case LOGOUT:
      return {
        ...state,
      };
    case REGISTER:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default auth;
