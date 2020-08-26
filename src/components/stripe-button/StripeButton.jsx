import StripeCheckout from 'react-stripe-checkout';

import React from 'react';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_p2ZyLroMnc4wlnWGglajA1DH00BM4rs9Ho'
    const onToken = token => {
        console.log(token);
        alert("Payment sucessful");
    }
    return (
       <StripeCheckout
       labe='Pay Now'
       name='CRWN Clothing'
       billingAddress
       shippingAdress
       image='https://svgshare.com/i/CUz.svg'
       description={`Your total is $${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishableKey}
       />
           
     
    );
}

export default StripeButton;
