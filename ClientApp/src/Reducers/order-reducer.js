"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderReducer = void 0;
var orderReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    if (state === undefined) {
        return null;
    }
    switch (action.type) {
        case 'SUBMIT_ORDER_SUCCESS': // Should be resetting application state here
        case 'SUBMIT_ORDER':
        default:
            return state;
    }
};
exports.orderReducer = orderReducer;
//# sourceMappingURL=order-reducer.js.map