import * as Sandwich from '../Interfaces/sandwiches';
import { sandwichMenuReducer } from '../Reducers/sandwich-menu-reducer';
import { shoppingCartReducer } from '../Reducers/shopping-cart-reducer';
import { ShoppingCartState } from '../Interfaces/shopping-cart';
import { OrderDetailsForm } from '../Interfaces/order-details-form';
import { reducer as reduxFormReducer } from 'redux-form';
import { orderReducer } from '../Reducers/order-reducer';

// The top-level state object
export interface ApplicationState {
    sandwichMenu: Sandwich.SandwichMenuState | undefined;
    shoppingCart: ShoppingCartState | undefined;
    form: OrderDetailsForm | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    sandwichMenu: sandwichMenuReducer,
    shoppingCart: shoppingCartReducer,
    order: orderReducer,
    form: reduxFormReducer,
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
