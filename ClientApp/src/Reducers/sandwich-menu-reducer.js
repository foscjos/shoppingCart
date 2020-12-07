"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sandwichMenuReducer = void 0;
var sandwichMenuReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    if (state === undefined || state.sandwiches === undefined) {
        return { sandwiches: [], isLoading: false };
    }
    switch (action.type) {
        case 'REQUEST_SANDWICH_MENU':
            return {
                sandwiches: state.sandwiches,
                isLoading: true
            };
        case 'RECEIVE_SANDWICH_MENU':
            return {
                sandwiches: action.sandwiches,
                isLoading: false
            };
        default:
            return state;
    }
};
exports.sandwichMenuReducer = sandwichMenuReducer;
//# sourceMappingURL=sandwich-menu-reducer.js.map