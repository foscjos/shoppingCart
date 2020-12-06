"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var WeatherForecasts = require("../Interfaces/WeatherForecasts");
var Counter = require("../Interfaces/Counter");
var sandwich_menu_reducer_1 = require("../Reducers/sandwich-menu-reducer");
var shopping_cart_reducer_1 = require("../Reducers/shopping-cart-reducer");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    sandwichMenu: sandwich_menu_reducer_1.sandwichMenuReducer,
    shoppingCart: shopping_cart_reducer_1.shoppingCartReducer,
};
//# sourceMappingURL=index.js.map