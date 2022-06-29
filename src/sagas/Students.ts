import { call } from "redux-saga/effects";
import getStudents from "../api";

export function* getStudentsSaga(): Generator {
  console.log("getStudentsSaga called ");
  const data = yield call(getStudents);
  console.log("data from the api", data);
}
