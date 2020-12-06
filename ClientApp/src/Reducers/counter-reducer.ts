import { CounterState } from "../store/Counter";

export const counter = (state = {} as CounterState, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        default:
            return state;
    }
};