"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSandwichMenuSuccess = exports.requestSandwichMenu = void 0;
var requestSandwichMenu = function () { return ({
    type: 'REQUEST_SANDWICH_MENU',
}); };
exports.requestSandwichMenu = requestSandwichMenu;
var getSandwichMenuSuccess = function (data) { return ({
    type: 'RECEIVE_SANDWICH_MENU',
    sandwiches: data
}); };
exports.getSandwichMenuSuccess = getSandwichMenuSuccess;
//# sourceMappingURL=sandwich-menu-action.js.map