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
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var shopping_cart_action_1 = require("../Actions/shopping-cart-action");
var ShoppinngCartReview = /** @class */ (function (_super) {
    __extends(ShoppinngCartReview, _super);
    function ShoppinngCartReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShoppinngCartReview.prototype.renderAddOne = function (item) {
        var _this = this;
        return (React.createElement("button", { type: "button", className: "btn btn-primary btn-lg", onClick: function () { _this.props.addItemToCart(item); } }, "Add one"));
    };
    ShoppinngCartReview.prototype.renderRemoveOne = function (item) {
        var _this = this;
        return (React.createElement("button", { type: "button", className: "btn btn-primary btn-lg", onClick: function () { _this.props.removeItemFromCart(item); } }, "Remove one"));
    };
    ShoppinngCartReview.prototype.renderRemoveEntireItem = function (item) {
        var _this = this;
        return (React.createElement("button", { type: "button", className: "btn btn-primary btn-lg", onClick: function () { _this.props.removeEntireItem(item); } }, "Remove all"));
    };
    ShoppinngCartReview.prototype.renderCart = function () {
        var _this = this;
        return (React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Item"),
                    React.createElement("th", null, "Price per unit"),
                    React.createElement("th", null, "Quantity"),
                    React.createElement("th", null),
                    React.createElement("th", null),
                    React.createElement("th", null))),
            React.createElement("tbody", null, this.props.items.map(function (cartItem) {
                return React.createElement("tr", { key: cartItem.item.sku },
                    React.createElement("td", null, cartItem.item.name),
                    React.createElement("td", null,
                        "$",
                        cartItem.item.price),
                    React.createElement("td", null, cartItem.quantity),
                    React.createElement("td", null, _this.renderAddOne(cartItem.item)),
                    React.createElement("td", null, _this.renderRemoveOne(cartItem.item)),
                    React.createElement("td", null, _this.renderRemoveEntireItem(cartItem.item)));
            }))));
    };
    ShoppinngCartReview.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", { id: "tabelLabel" }, "Shopping Cart"),
            this.renderCart(),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-10 col-xs-8" },
                    "Total Price: $",
                    this.props.totalPrice),
                React.createElement("div", { className: "col-md-2 col-xs-4" },
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/check-out" },
                        React.createElement("button", { className: "btn btn-primary btn-lg", type: "button" }, "Check out"))))));
    };
    return ShoppinngCartReview;
}(React.PureComponent));
;
var mapDispatchToProps = function (dispatch) {
    return {
        addItemToCart: function (item) { return dispatch(shopping_cart_action_1.addItemToCart(item)); },
        removeItemFromCart: function (item) { return dispatch(shopping_cart_action_1.removeItemFromCart(item)); },
        removeEntireItem: function (item) { return dispatch(shopping_cart_action_1.removeEntireItem(item)); },
    };
};
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(function (state) { return state.shoppingCart; }, exports.mapDispatchToProps)(ShoppinngCartReview);
//# sourceMappingURL=shopping-cart-review.js.map