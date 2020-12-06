import { Sandwich } from "../store/Sandwiches"

export const requestSandwichMenu = () => ({
    type: 'REQUEST_SANDWICH_MENU',
})

export const getSandwichMenuSuccess = (data: Sandwich[]) => ({
    type: 'RECEIVE_SANDWICH_MENU',
    sandwiches: data
})