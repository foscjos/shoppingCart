"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeEntireItem = exports.removeItemFromCart = exports.addItemToCart = void 0;
var addItemToCart = function (item) { return ({
    type: 'ADD_TO_CART',
    payload: item,
}); };
exports.addItemToCart = addItemToCart;
var removeItemFromCart = function (item) { return ({
    type: 'REMOVE_FROM_CART',
    payload: item,
}); };
exports.removeItemFromCart = removeItemFromCart;
var removeEntireItem = function (item) { return ({
    type: 'REMOVE_ALL_SINGLE_ITEM',
    payload: item,
}); };
exports.removeEntireItem = removeEntireItem;
//# sourceMappingURL=shopping-cart-action.js.map