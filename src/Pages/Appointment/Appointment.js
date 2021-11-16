import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Header></Header>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;