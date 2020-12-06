import { Sandwich } from "../Interfaces/Sandwiches";

export const addItemToCart = (item: Sandwich) => ({
    type: 'ADD_TO_CART',
    payload: item,
})

export const removeItemFromCart = (item: Sandwich) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
})

export const removeEntireItem = (item: Sandwich) => ({
    type: 'REMOVE_ALL_SINGLE_ITEM',
    payload: item,
})