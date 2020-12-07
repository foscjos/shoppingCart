import { takeLatest, select, put } from "redux-saga/effects";
import { submitOrderSuccess } from "../Actions/order-action";

export const stateSelector = state => state;
export function* watchSubmitOrder() {
    yield takeLatest('SUBMIT_ORDER', callSubmitOrder);
}

export function* callSubmitOrder() {
    // Gather order data from state
    const state = yield select(stateSelector);

    const orderInfo = {
        BillingFirstName: state.form.orderDetails.values.billingFirstName,
        BillingLastName: state.form.orderDetails.values.billingLastName,
        BillingCreditCardNumber: state.form.orderDetails.values.billingCreditCardNumber,
        ShippingFirstName: state.form.orderDetails.values.shippingFirstName,
        ShippingLastName: state.form.orderDetails.values.shippingLastName,
        ShippingStreetAddress: state.form.orderDetails.values.shippingStreetAddress,
        ShippingCity: state.form.orderDetails.values.shippingCity,
        ShippingState: state.form.orderDetails.values.shippingState,
        ShippingPostalCode: state.form.orderDetails.values.shippingPostalCode,
    };

    const request = {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderInfo, cart: state.shoppingCart.items })
    };

    yield fetch('create/Order', request);

    yield put(submitOrderSuccess());

    window.location.href = '/order-success'
}