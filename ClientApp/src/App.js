"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var layout_1 = require("./components/layout");
var home_1 = require("./components/home");
var order_success_1 = require("./components/order-success");
var sandwich_menu_1 = require("./components/sandwich-menu");
var shopping_cart_review_1 = require("./components/shopping-cart-review");
var order_checkout_1 = require("./components/order-checkout");
require("./custom.css");
exports.default = (function () { return (React.createElement(layout_1.default, null,
    React.createElement(react_router_1.Route, { exact: true, path: '/', component: home_1.default }),
    React.createElement(react_router_1.Route, { path: '/sandwich-menu', component: sandwich_menu_1.default }),
    React.createElement(react_router_1.Route, { path: '/shopping-cart', component: shopping_cart_review_1.default }),
    React.createElement(react_router_1.Route, { path: '/check-out', component: order_checkout_1.default }),
    React.createElement(react_router_1.Route, { path: '/order-success', component: order_success_1.default }))); });
//# sourceMappingURL=App.js.map