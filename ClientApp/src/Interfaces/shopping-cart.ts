import { Sandwich } from "./sandwiches";

export interface ShoppingCartState {
    items: ShoppingCartItem[];
    totalPrice: number;
}

export interface ShoppingCartItem {
    item: Sandwich;
    quantity: number;
}