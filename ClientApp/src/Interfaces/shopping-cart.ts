import { Sandwich } from "./Sandwiches";

export interface ShoppingCartState {
    items: ShoppingCartItem[];
    totalPrice: number;
}

export interface ShoppingCartItem {
    item: Sandwich;
    quantity: number;
}