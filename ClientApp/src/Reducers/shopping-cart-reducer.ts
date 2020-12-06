import { Sandwich } from "../Interfaces/Sandwiches";
import { ShoppingCartState } from "../Interfaces/shopping-cart";

export const shoppingCartReducer = (state = {} as ShoppingCartState, action) => {
    if (state === undefined || state.items === undefined) {
        return { items: [], totalPrice: 0 };
    }

    let index = isItemInCart(state, action.payload);
    let newCart = state.items;
    let totalPrice = 0;

    switch (action.type) {
        case 'ADD_TO_CART':
            if (index >= 0) {
                newCart[index].quantity += 1;
            } else {
                newCart.push({ item: action.payload as Sandwich, quantity: 1 });
            }
            break;
        case 'REMOVE_FROM_CART':
            if (index >= 0) {
                if (newCart[index].quantity === 1) {
                    newCart.splice(index, 1);
                } else {
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

    newCart.forEach(item => {
        totalPrice += item.item.price * item.quantity;
    });

    return { items: newCart, totalPrice: totalPrice.toFixed(2) };
};

function isItemInCart(state: ShoppingCartState, newItem: Sandwich): number {
    // returns indice of item in state, or -1 if not found
    let result = -1;

    if (state !== undefined && state.items !== undefined && newItem !== undefined && newItem.sku !== undefined) {
        for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].item.sku === newItem.sku) {
                result = i;
            }
        }
    }

    return result;
}