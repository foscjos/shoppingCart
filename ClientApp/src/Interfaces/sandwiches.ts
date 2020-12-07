export interface SandwichMenuState {
    isLoading: boolean;
    sandwiches: Sandwich[];
}

export interface Sandwich {
    sku: number;
    name: string;
    description: string;
    price: number;
}