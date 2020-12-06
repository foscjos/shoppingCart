import { put, takeLatest } from "redux-saga/effects";
import { getSandwichMenuSuccess } from "../Actions/sandwich-menu-action";
import { Sandwich } from "../Interfaces/Sandwiches";

export function* watchRequestMenu() {
    yield takeLatest('REQUEST_SANDWICH_MENU', callGetMenu);
}

export function* callGetMenu() {
    const response = yield fetch('sandwichMenu')
        .then(response => response.json() as Promise<Sandwich[]>)
        .then(data => {
            return data;
        });
    yield put(getSandwichMenuSuccess(response));
}