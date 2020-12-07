import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import OrderSuccess from './components/order-success';
import SandwichMenu from './components/sandwich-menu';
import ShoppinngCartReview from './components/shopping-cart-review';
import OrderCheckout from './components/order-checkout';
import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/sandwich-menu' component={SandwichMenu} />
        <Route path='/shopping-cart' component={ShoppinngCartReview} />
        <Route path='/check-out' component={OrderCheckout} />
        <Route path='/order-success' component={OrderSuccess} />
    </Layout>
);
