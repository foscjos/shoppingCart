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
var shopping_cart_action_1 = require("../Actions/shopping-cart-action");
var sandwich_menu_action_1 = require("../Actions/sandwich-menu-action");
var SandwichMenu = /** @class */ (function (_super) {
    __extends(SandwichMenu, _super);
    function SandwichMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SandwichMenu.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    SandwichMenu.prototype.ensureDataFetched = function () {
        this.props.requestSandwichMenu();
    };
    SandwichMenu.prototype.renderAddToCart = function (item) {
        var _this = this;
        return (React.createElement("button", { type: "button", className: "btn btn-primary btn-lg", onClick: function () { _this.props.addItemToCart(item); } }, "Add To Cart"));
    };
    SandwichMenu.prototype.renderSandwichMenu = function () {
        var _this = this;
        return (React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Sandwich"),
                    React.createElement("th", null, "Desc."),
                    React.createElement("th", null, "Price (USD)"),
                    React.createElement("th", null))),
            React.createElement("tbody", null, this.props.sandwiches.map(function (sandwich) {
                return React.createElement("tr", { key: sandwich.sku },
                    React.createElement("td", null, sandwich.name),
                    React.createElement("td", null, sandwich.description),
                    React.createElement("td", null,
                        "$",
                        sandwich.price),
                    React.createElement("td", null, _this.renderAddToCart(sandwich)));
            }))));
    };
    SandwichMenu.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", { id: "tabelLabel" }, "Sandwich Menu"),
            React.createElement("p", null, "Welcome to Sammys Sandwich shop!"),
            this.renderSandwichMenu()));
    };
    return SandwichMenu;
}(React.PureComponent));
var mapDispatchToProps = function (dispatch) {
    return {
        addItemToCart: function (item) { return dispatch(shopping_cart_action_1.addItemToCart(item)); },
        requestSandwichMenu: function () { return dispatch(sandwich_menu_action_1.requestSandwichMenu()); }
    };
};
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(function (state) { return state.sandwichMenu; }, exports.mapDispatchToProps)(SandwichMenu);
//# sourceMappingURL=SandwichMenu.js.map