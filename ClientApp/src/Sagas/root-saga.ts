import { all, call } from 'redux-saga/effects';
import { watchRequestMenu } from './sandwichmenu-saga';
import { watchSubmitOrder } from './order-saga';

export const rootSaga = function* rootSaga() {
    yield all({
        watchRequestMenu: call(watchRequestMenu),
        watchSubmitOrder: call(watchSubmitOrder),
    });
};