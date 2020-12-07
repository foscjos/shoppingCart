import * as React from 'react';
import { connect } from 'react-redux';

const OrderSuccess = () => (
    <div>
        <h1>Order Submitted!</h1>
        <p>Keep an eye out for your tracking information.</p>
    </div>
);

export default connect()(OrderSuccess);