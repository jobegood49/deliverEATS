import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Cart from '../Cart';
import './Checkout.css';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        {typeof this.props.location.params !== 'undefined' ? (
          <div className="container">
            <div className="cart">
              <Cart
                cart={this.props.location.params.cart}
                increment={this.props.location.params.increment}
                decrement={this.props.location.params.decrement}
              />
            </div>
            <div className="form">
              <Form
                onSubmit={values => {
                  console.log(values);
                }}
                // validate={}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <h2>Simple Default Input</h2>
                    <div>
                      <label>First Name</label>
                      <Field
                        name="firstName"
                        component="input"
                        placeholder="First Name"
                      />
                    </div>
                    <h2>Render Function</h2>
                    <Field
                      name="bio"
                      render={({ input, meta }) => (
                        <div>
                          <label>Bio</label>
                          <textarea {...input} />
                          {meta.touched &&
                            meta.error && <span>{meta.error}</span>}
                        </div>
                      )}
                    />

                    <h2>Render Function as Children</h2>
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
          // this.props.location.params.cart.map(cartItem => (
          //   <div className="item">
          //     <p>{cartItem.title}</p>
          //     <p>{cartItem.price}</p>
          //     <p>{cartItem.quantity}</p>
          //   </div>
          // ))
          <p>PLEASE SELECT ITEMS BEFORE CHECKOUT</p>
        )}
      </div>
    );
  }
}
