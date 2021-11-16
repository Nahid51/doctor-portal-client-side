import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvlDNFWGOR9N2hF9jkwX7LWryCVzhjI3SUdlUGYvnjWmJrD4TCSPTHMrgBvM7RYn9zyfZq98AHw5UAx8iHC21SC006FYPdg8U');

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointments] = useState({});
    useEffect(() => {
        fetch(`https://gentle-thicket-16069.herokuapp.com/appointment/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [appointmentId])
    return (
        <div>
            <h2>Payment for: {appointment.serviceName}</h2>
            <h3>Patient Name: {appointment.patientName}</h3>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>}
        </div>
    );
};

export default Payment;