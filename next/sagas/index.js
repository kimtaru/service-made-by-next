// function loginAPI() {
//   return axios.post("api/login");
// }

// function logoutAPI() {
//   return axios.post("api/logout");
// }

// function addPostAPI(data) {
//   return axios.post("/api/post", data);
// }
import { all, fork } from "redux-saga/effects";
import axios from "axios";

import postSaga from "./post";
import userSaga from "./user";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}

/*
take: 액션을 실행
put: dispatch
fork: 비동기함수 호출
call: 동기함수 호출
*/
