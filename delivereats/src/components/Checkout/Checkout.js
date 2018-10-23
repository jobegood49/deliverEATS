import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Cart from '../Cart';
import './Checkout.css';
import { connect } from 'react-redux';

class Checkout extends Component {
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? (
          <div className="container">
            <div>
              <Cart />
            </div>
            <div>
              <Form
                onSubmit={values => {
                  console.log(values);
                }}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <h2>Checkout Form</h2>
                    <div>
                      <label>First Name</label>
                      <Field
                        name="firstName"
                        component="input"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label>Last Name</label>
                      <Field
                        name="lastName"
                        component="input"
                        placeholder="Last Name"
                      />
                    </div>
                    <Field name="phone">
                      {({ input, meta }) => (
                        <div>
                          <label>Phone</label>
                          <input type="text" {...input} placeholder="Phone" />
                          {meta.touched &&
                            meta.error && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>

                    <button type="submit" disabled={pristine || invalid}>
                      Submit
                    </button>
                  </form>
                )}
              />
            </div>
          </div>
        ) : (
          <p>PLEASE SELECT ITEMS BEFORE CHECKOUT</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart.cartItems,
});

export default connect(
  mapStateToProps,
  null,
)(Checkout);
