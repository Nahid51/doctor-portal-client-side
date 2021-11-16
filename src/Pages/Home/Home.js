import React from 'react';
import AppoinmentBanner from '../AppointmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import BannerBelow from '../BannerBolow/BannerBelow';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BannerBelow></BannerBelow>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppoinmentBanner></AppoinmentBanner>
            <Doctors />
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;