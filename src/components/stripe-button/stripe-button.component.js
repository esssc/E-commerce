import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_6beA0uGsKB4OoHTwT0WUT0CM00IvIFmyEP';

   const  onToken = token => {
        console.log(token);
        alert("Payment successful")
    };

    return (
        <StripeCheckout
            stripeKey={publishableKey}
            token={onToken}
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
        />
    )
};

export default StripeCheckoutButton;