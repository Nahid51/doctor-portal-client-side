import { Alert, CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const CheckoutForm = ({ appointment }) => {
    const { _id, price, patientName } = appointment;
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://gentle-thicket-16069.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error.message);
            setSuccess('');
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        } else {
            setError('');
            setSuccess('Your payment process is successfull')
            console.log(paymentIntent);
            setProcessing(false);
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                transaction: paymentIntent.client_secret.slice('_sercet')[0],
                created: paymentIntent.created,
                last4: paymentMethod.last4
            }
            fetch(`https://gentle-thicket-16069.herokuapp.com/appointments/${_id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    };
    return (
        <div>
            <h2>Hello</h2>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress color="secondary" />
                    :
                    <button type="submit" disabled={!stripe || success}>
                        Pay ${price}
                    </button>}
            </form>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
        </div>
    );
};

export default CheckoutForm;