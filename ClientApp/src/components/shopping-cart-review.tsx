import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { ShoppingCartItem, ShoppingCartState } from "../Interfaces/shopping-cart";
import { ApplicationState } from "../store";
import { addItemToCart, removeItemFromCart, removeEntireItem } from '../Actions/shopping-cart-action';
import * as SandwichMenuStore from '../Interfaces/Sandwiches';

export interface ShoppinngCartReviewDispatchProps {
    addItemToCart: (item: SandwichMenuStore.Sandwich) => void;
    removeItemFromCart: (item: SandwichMenuStore.Sandwich) => void;
    removeEntireItem: (item: SandwichMenuStore.Sandwich) => void;
}

type ShoppingCartReviewProps = 
    ShoppingCartState
    & ShoppinngCartReviewDispatchProps
    & RouteComponentProps<{}>;

class ShoppinngCartReview extends React.PureComponent<ShoppingCartReviewProps> {

    private renderAddOne(item: SandwichMenuStore.Sandwich) {
        return (
            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { this.props.addItemToCart(item); }}>
                Add one
            </button>
        );
    }

    private renderRemoveOne(item: SandwichMenuStore.Sandwich) {
        return (
            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { this.props.removeItemFromCart(item); }}>
                Remove one
            </button>
        );
    }

    private renderRemoveEntireItem(item: SandwichMenuStore.Sandwich) {
        return (
            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { this.props.removeEntireItem(item); }}>
                Remove all
            </button>
        );
    }

    private renderCart() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price per unit</th>
                        <th>Quantity</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map((cartItem: ShoppingCartItem) =>
                        <tr key={cartItem.item.sku}>
                            <td>{cartItem.item.name}</td>
                            <td>${cartItem.item.price}</td>
                            <td>{cartItem.quantity}</td>
                            <td>{this.renderAddOne(cartItem.item)}</td>
                            <td>{this.renderRemoveOne(cartItem.item)}</td>
                            <td>{this.renderRemoveEntireItem(cartItem.item)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">Shopping Cart</h1>
                {this.renderCart()}
                <div>
                    Total Price: ${this.props.totalPrice}
                </div>
            </React.Fragment>
        );
    }
};

export const mapDispatchToProps = (dispatch: Function): ShoppinngCartReviewDispatchProps => {
    return {
        addItemToCart: (item: SandwichMenuStore.Sandwich): void => dispatch(addItemToCart(item)),
        removeItemFromCart: (item: SandwichMenuStore.Sandwich): void => dispatch(removeItemFromCart(item)),
        removeEntireItem: (item: SandwichMenuStore.Sandwich): void => dispatch(removeEntireItem(item)),
    };
};

export default connect(
    (state: ApplicationState) => state.shoppingCart,
    mapDispatchToProps
)(ShoppinngCartReview);