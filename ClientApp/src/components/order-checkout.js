"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDispatchToProps = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var order_action_1 = require("../Actions/order-action");
var checkout_form_1 = require("./checkout-form");
var OrderCheckout = /** @class */ (function (_super) {
    __extends(OrderCheckout, _super);
    function OrderCheckout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.submit = function () {
            _this.props.submitOrder();
        };
        return _this;
    }
    OrderCheckout.prototype.renderCart = function () {
        return (React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Item"),
                    React.createElement("th", null, "Price per unit"),
                    React.createElement("th", null, "Quantity"))),
            React.createElement("tbody", null, this.props.shoppingCart.items.map(function (cartItem) {
                return React.createElement("tr", { key: cartItem.item.sku },
                    React.createElement("td", null, cartItem.item.name),
                    React.createElement("td", null,
                        "$",
                        cartItem.item.price),
                    React.createElement("td", null, cartItem.quantity));
            }))));
    };
    OrderCheckout.prototype.render = function () {
        if (this.props.shoppingCart !== undefined && this.props.shoppingCart.items !== undefined && this.props.shoppingCart.items.length > 0) {
            return (React.createElement(React.Fragment, null,
                React.createElement("h1", { id: "tabelLabel" }, "Ready to checkout?"),
                React.createElement("p", null, "Please enter your billing and shipping information below:"),
                this.renderCart(),
                React.createElement("div", { className: "col-md-10 col-xs-8" },
                    React.createElement("b", null,
                        "Total Price: $",
                        this.props.shoppingCart.totalPrice)),
                React.createElement(checkout_form_1.default, { onSubmit: this.submit })));
        }
        return null;
    };
    return OrderCheckout;
}(React.PureComponent));
var mapDispatchToProps = function (dispatch) {
    return {
        submitOrder: function () { return dispatch(order_action_1.submitOrder()); }
    };
};
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(function (state) { return state; }, exports.mapDispatchToProps)(OrderCheckout);
//# sourceMappingURL=order-checkout.js.map