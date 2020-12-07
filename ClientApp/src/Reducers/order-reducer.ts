import { ApplicationState } from "../store";

export const orderReducer = (state = {} as ApplicationState, action) => {
    if (state === undefined) {
        return null;
    }

    switch (action.type) {
        case 'SUBMIT_ORDER_SUCCESS': // Should be resetting application state here
        case 'SUBMIT_ORDER':
        default:
            return state;
    }
}