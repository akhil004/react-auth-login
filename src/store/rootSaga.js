import { all } from "redux-saga/effects";
import { getUserSaga } from "./user/saga";

export default function* (){
    yield all([
        getUserSaga()
    ])
}