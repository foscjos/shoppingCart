"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var Counter_1 = require("./components/Counter");
var FetchData_1 = require("./components/FetchData");
var SandwichMenu_1 = require("./components/SandwichMenu");
var shopping_cart_review_1 = require("./components/shopping-cart-review");
require("./custom.css");
exports.default = (function () { return (React.createElement(Layout_1.default, null,
    React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.default }),
    React.createElement(react_router_1.Route, { path: '/counter', component: Counter_1.default }),
    React.createElement(react_router_1.Route, { path: '/fetch-data/:startDateIndex?', component: FetchData_1.default }),
    React.createElement(react_router_1.Route, { path: '/sandwich-menu', component: SandwichMenu_1.default }),
    React.createElement(react_router_1.Route, { path: '/shopping-cart', component: shopping_cart_review_1.default }),
    React.createElement(react_router_1.Route, { path: '/check-out', component: shopping_cart_review_1.default }))); });
//# sourceMappingURL=App.js.map