import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/layout';
import Home from './components/home';
import SandwichMenu from './components/sandwich-menu';
import ShoppinngCartReview from './components/shopping-cart-review';
import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/sandwich-menu' component={SandwichMenu} />
        <Route path='/shopping-cart' component={ShoppinngCartReview} />
        <Route path='/check-out' component={ShoppinngCartReview} />
    </Layout>
);
