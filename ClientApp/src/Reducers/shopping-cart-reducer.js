"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shoppingCartReducer = void 0;
var shoppingCartReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    if (state === undefined || state.items === undefined) {
        return { items: [], totalPrice: 0 };
    }
    var index = isItemInCart(state, action.payload);
    var newCart = state.items;
    var totalPrice = 0;
    switch (action.type) {
        case 'ADD_TO_CART':
            if (index >= 0) {
                newCart[index].quantity += 1;
            }
            else {
                newCart.push({ item: action.payload, quantity: 1 });
            }
            break;
        case 'REMOVE_FROM_CART':
            if (index >= 0) {
                if (newCart[index].quantity === 1) {
                    newCart.splice(index, 1);
                }
                else {
                    newCart[index].quantity -= 1;
                }
            }
            break;
        case 'REMOVE_ALL_SINGLE_ITEM':
            if (index >= 0) {
                newCart.splice(index, 1);
            }
            break;
        default:
            return state;
    }
    newCart.forEach(function (item) {
        totalPrice += item.item.price * item.quantity;
    });
    return { items: newCart, totalPrice: totalPrice.toFixed(2) };
};
exports.shoppingCartReducer = shoppingCartReducer;
function isItemInCart(state, newItem) {
    // returns indice of item in state, or -1 if not found
    var result = -1;
    if (state !== undefined && state.items !== undefined && newItem !== undefined && newItem.sku !== undefined) {
        for (var i = 0; i < state.items.length; i++) {
            if (state.items[i].item.sku === newItem.sku) {
                result = i;
            }
        }
    }
    return result;
}
//# sourceMappingURL=shopping-cart-reducer.js.map