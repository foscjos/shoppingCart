"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var redux_form_1 = require("redux-form");
require("./components.css");
var CheckoutForm = function (props) {
    var handleSubmit = props.handleSubmit;
    return (React.createElement("form", { onSubmit: handleSubmit },
        React.createElement("div", { className: "row space-top" },
            React.createElement("div", { className: "col-sm-4" },
                React.createElement("h5", null, "Billing Details:"),
                React.createElement(redux_form_1.Field, { name: "billingFirstName", label: "First Name", component: renderField, type: "text", placeholder: "First Name", validate: required }),
                React.createElement(redux_form_1.Field, { name: "billingLastName", label: "Last Name", component: renderField, type: "text", placeholder: "Last Name", validate: required }),
                React.createElement(redux_form_1.Field, { name: "billingCreditCardNumber", label: "Credit Card Number", component: renderField, type: "number", placeholder: "1234 5678 1234 5678", validate: required })),
            React.createElement("div", { className: "col-sm-4" },
                React.createElement("h5", null, "Shipping Details:"),
                React.createElement(redux_form_1.Field, { name: "shippingFirstName", label: "First Name", component: renderField, type: "text", placeholder: "First Name", validate: required }),
                React.createElement(redux_form_1.Field, { name: "shippingLastName", label: "Last Name", component: renderField, type: "text", placeholder: "Last Name", validate: required }),
                React.createElement(redux_form_1.Field, { name: "shippingStreetAddress", label: "Street Address", component: renderField, type: "text", placeholder: "123 Avenue Street", validate: required }),
                React.createElement(redux_form_1.Field, { name: "shippingCity", label: "City", component: renderField, type: "text", placeholder: "Minneapolis", validate: required }),
                React.createElement(redux_form_1.Field, { name: "shippingState", label: "State", component: renderStateDropdown, validate: required }),
                React.createElement(redux_form_1.Field, { name: "shippingPostalCode", label: "Postal Code", component: renderField, type: "number", placeholder: "55555", validate: [required, postalCode] }))),
        React.createElement("div", { className: "space-bottom" },
            React.createElement("button", { type: "submit", className: "btn btn-primary btn-sm", disabled: props.pristine || !props.valid || props.submitting }, "Submit"))));
};
// Allows me to show validation to user
var renderField = function (_a) {
    var input = _a.input, label = _a.label, type = _a.type, _b = _a.meta, touched = _b.touched, error = _b.error;
    return (React.createElement("div", { className: "space-bottom" },
        React.createElement("label", null, label),
        React.createElement("div", null,
            React.createElement("input", __assign({}, input, { placeholder: label, type: type })),
            touched &&
                ((error && React.createElement("span", { className: "error" }, error))))));
};
var renderStateDropdown = function (_a) {
    var input = _a.input, label = _a.label, type = _a.type, _b = _a.meta, touched = _b.touched, error = _b.error;
    return (React.createElement("div", null,
        React.createElement("label", null, label),
        React.createElement("div", null,
            React.createElement("select", __assign({}, input, { placeholder: label, type: type }),
                React.createElement("option", null),
                React.createElement("option", { value: "MN" }, "Minnesota"),
                React.createElement("option", { value: "WI" }, "Wisconsin"),
                React.createElement("option", { value: "IA" }, "Iowa"),
                React.createElement("option", { value: "ND" }, "North Dakota")),
            touched &&
                ((error && React.createElement("span", { className: "error" }, error))))));
};
var required = function (value) { return (value || typeof value === 'number' ? undefined : 'Required'); };
var postalCode = function (value) { return value && value.length !== 5 ? "Postal code is required, must be 5 characters long" : undefined; };
//export const mapDispatchToProps = (dispatch: Function): CheckoutFormDispatchProps => {
//    return {
//        submitOrder: (): void => dispatch(submitOrder())
//    }
//};
var OrderDetailsForm = redux_form_1.reduxForm({
    form: 'orderDetails',
    destroyOnUnmount: false,
})(CheckoutForm);
exports.default = OrderDetailsForm;
//# sourceMappingURL=checkout-form.js.map