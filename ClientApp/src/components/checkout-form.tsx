import * as React from "react";
import { Field, reduxForm } from "redux-form";
import './components.css';

let CheckoutForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
                <div className="row space-top">
                    <div className="col-sm-4">
                        <h5>Billing Details:</h5>
                        <Field
                            name="billingFirstName"
                            label="First Name"
                            component={renderField}
                            type="text"
                            placeholder="First Name"
                            validate={required}
                        />
                        <Field
                            name="billingLastName"
                            label="Last Name"
                            component={renderField}
                            type="text"
                            placeholder="Last Name"
                            validate={required}
                        />
                        <Field
                            name="billingCreditCardNumber"
                            label="Credit Card Number"
                            component={renderField}
                            type="number"
                            placeholder="1234 5678 1234 5678"
                            validate={required}
                        />
                    </div>
                    <div className="col-sm-4">
                        <h5>Shipping Details:</h5>
                        <Field
                            name="shippingFirstName"
                            label="First Name"
                            component={renderField}
                            type="text"
                            placeholder="First Name"
                            validate={required}
                        />
                        <Field
                            name="shippingLastName"
                            label="Last Name"
                            component={renderField}
                            type="text"
                            placeholder="Last Name"
                            validate={required}
                        />
                        <Field
                            name="shippingStreetAddress"
                            label="Street Address"
                            component={renderField}
                            type="text"
                            placeholder="123 Avenue Street"
                            validate={required}
                        />
                        <Field
                            name="shippingCity"
                            label="City"
                            component={renderField}
                            type="text"
                            placeholder="Minneapolis"
                            validate={required}
                        />
                        <Field
                            name="shippingState"
                            label="State"
                            component={renderStateDropdown}
                            validate={required}
                        />
                        <Field
                            name="shippingPostalCode"
                            label="Postal Code"
                            component={renderField}
                            type="number"
                            placeholder="55555"
                            validate={[required, postalCode]}
                        />
                    </div>
                </div>
                <div className="space-bottom">
                    <button type="submit"
                        className="btn btn-primary btn-sm"
                        disabled={props.pristine || !props.valid || props.submitting}>
                        Submit
                    </button>
                </div>
            </form>
    );
}

// Allows me to show validation to user
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }}) => (
    <div className="space-bottom">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                ((error && <span className="error">{error}</span>))}
        </div>
    </div>
);

const renderStateDropdown = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <select {...input} placeholder={label} type={type}>
                <option />
                <option value="MN">Minnesota</option>
                <option value="WI">Wisconsin</option>
                <option value="IA">Iowa</option>
                <option value="ND">North Dakota</option>
            </select>
            {touched &&
                ((error && <span className="error">{error}</span>))}
        </div>
    </div>
);


const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const postalCode = value => value && value.length !== 5 ? `Postal code is required, must be 5 characters long` : undefined

//export const mapDispatchToProps = (dispatch: Function): CheckoutFormDispatchProps => {
//    return {
//        submitOrder: (): void => dispatch(submitOrder())
//    }
//};

const OrderDetailsForm = reduxForm({
    form: 'orderDetails',
    destroyOnUnmount: false,
})(CheckoutForm);

export default OrderDetailsForm;