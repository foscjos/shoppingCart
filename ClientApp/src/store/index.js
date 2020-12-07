"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var sandwich_menu_reducer_1 = require("../Reducers/sandwich-menu-reducer");
var shopping_cart_reducer_1 = require("../Reducers/shopping-cart-reducer");
var redux_form_1 = require("redux-form");
var order_reducer_1 = require("../Reducers/order-reducer");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    sandwichMenu: sandwich_menu_reducer_1.sandwichMenuReducer,
    shoppingCart: shopping_cart_reducer_1.shoppingCartReducer,
    order: order_reducer_1.orderReducer,
    form: redux_form_1.reducer,
};
//# sourceMappingURL=index.js.map