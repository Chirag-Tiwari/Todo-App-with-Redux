import createSagaMiddleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { STUDENTS_FETCH } from "../actions/Students";
import { getStudentsSaga } from "./Students";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeEvery(STUDENTS_FETCH, getStudentsSaga);
}

export default sagaMiddleware;
