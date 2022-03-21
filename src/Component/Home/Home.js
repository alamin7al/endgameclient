import React from 'react';
import DoctorPagination from './DoctorPagination';

import RevewShow from './RevewShow';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <DoctorPagination></DoctorPagination>
            <RevewShow></RevewShow>
           
        </div>
    );
};

export default Home;