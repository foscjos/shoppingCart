import { SandwichMenuState } from "../Interfaces/sandwiches";

export const sandwichMenuReducer = (state = {} as SandwichMenuState, action) => {
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