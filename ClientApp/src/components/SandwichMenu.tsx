import * as React from "react";
import { connect } from 'react-redux';
import { RouteComponentProps } from "react-router";
import { ApplicationState } from "../store";
import * as SandwichMenuStore from '../Interfaces/Sandwiches';
import { addItemToCart } from '../Actions/shopping-cart-action';
import { requestSandwichMenu } from '../Actions/sandwich-menu-action';

export interface SandwichMenuDispatchProps {
    addItemToCart: (item: SandwichMenuStore.Sandwich) => void;
    requestSandwichMenu: () => void;
}

type SandwichMenuProps =
    SandwichMenuStore.SandwichMenuState
    & SandwichMenuDispatchProps
    & RouteComponentProps<{}>;

class SandwichMenu extends React.PureComponent<SandwichMenuProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    private ensureDataFetched() {
        this.props.requestSandwichMenu();
    }

    private renderAddToCart(item: SandwichMenuStore.Sandwich) {
        return (
            <button type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { this.props.addItemToCart(item); }}>
                Add To Cart
            </button>
        );
    }

    private renderSandwichMenu() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Sandwich</th>
                        <th>Desc.</th>
                        <th>Price (USD)</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.sandwiches.map((sandwich: SandwichMenuStore.Sandwich) =>
                        <tr key={sandwich.sku}>
                            <td>{sandwich.name}</td>
                            <td>{sandwich.description}</td>
                            <td>${sandwich.price}</td>
                            <td>{this.renderAddToCart(sandwich)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    
    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">Sandwich Menu</h1>
                <p>Welcome to Sammys Sandwich shop!</p>
                { this.renderSandwichMenu()}
            </React.Fragment>
        );
    }
}

export const mapDispatchToProps = (dispatch: Function): SandwichMenuDispatchProps => {
    return {
        addItemToCart: (item: SandwichMenuStore.Sandwich): void => dispatch(addItemToCart(item)),
        requestSandwichMenu: (): void => dispatch(requestSandwichMenu())
    };
};

export default connect(
    (state: ApplicationState) => state.sandwichMenu,
    mapDispatchToProps
)(SandwichMenu); 