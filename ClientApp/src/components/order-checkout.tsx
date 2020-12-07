import * as React from "react";
import { connect } from 'react-redux';
import { RouteComponentProps } from "react-router-dom";
import { submitOrder } from "../Actions/order-action";
import { ShoppingCartItem } from "../Interfaces/shopping-cart";
import { ApplicationState } from "../store";
import CheckoutForm from './checkout-form';

export interface OrderCheckoutDispatchProps {
    submitOrder: () => void;
}

type OrderCheckoutProps = 
    OrderCheckoutDispatchProps
    & ApplicationState
    & RouteComponentProps<{}>;

class OrderCheckout extends React.PureComponent<OrderCheckoutProps> {
    private renderCart() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price per unit</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.shoppingCart.items.map((cartItem: ShoppingCartItem) =>
                        <tr key={cartItem.item.sku}>
                            <td>{cartItem.item.name}</td>
                            <td>${cartItem.item.price}</td>
                            <td>{cartItem.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    submit = () => {
        this.props.submitOrder();
    }

    public render() {
        if (this.props.shoppingCart !== undefined && this.props.shoppingCart.items !== undefined && this.props.shoppingCart.items.length > 0) {
            return (
                <React.Fragment>
                    <h1 id="tabelLabel">Ready to checkout?</h1>
                    <p>Please enter your billing and shipping information below:</p>
                    {this.renderCart()}
                    <div className="col-md-10 col-xs-8">
                        <b>Total Price: ${this.props.shoppingCart.totalPrice}</b>
                    </div>
                    <CheckoutForm onSubmit={this.submit} />
                </React.Fragment>
            );
        }

        return null;
    }
}

export const mapDispatchToProps = (dispatch: Function): OrderCheckoutDispatchProps => {
    return {
        submitOrder: (): void => dispatch(submitOrder())
    }
};

export default connect(
    (state: ApplicationState) => state,
    mapDispatchToProps
)(OrderCheckout);