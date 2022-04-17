import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../api/contents";

const GET_CONTENTS = "contents/GET_CONTENTS";
const GET_CONTENTS_SUCCESS = "contents/GET_CONTENTS_SUCCESS";

export const getContents = () => ({ type: GET_CONTENTS });

function* getContentsSaga() {
  try {
    const result = yield call(api.getContents);

    yield put({
      type: GET_CONTENTS_SUCCESS,
      payload: result,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* contentsSaga() {
  yield takeLatest(GET_CONTENTS, getContentsSaga);
}

const initialState = {
  selectedContent: {},
  contents: [],
};

function contents(state = initialState, action) {
  switch (action.type) {
    case GET_CONTENTS_SUCCESS:
      return {
        ...state,
        contents: action.payload,
      };
    default:
      return state;
  }
}

export default contents;
