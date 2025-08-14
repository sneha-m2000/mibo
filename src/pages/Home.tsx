import React from 'react';
import Header from '../components/Header';
// import MouseMovementAnimation from '../components/MouseMovementAnimation'
import PremiumDepartmentDashboard from '../components/Graph';
import MentalHealthApp from '../components/dropdown';
// import LiquidButton from '../components/Button';
// import PremiumFlipDropdown from '../components/who_its_for';

const Home = () => {
    return (
        <div>
            <div>
                {/* <MouseMovementAnimation /> */}
                <Header />
                {/* <LiquidButton /> */}
                {/* <PremiumFlipDropdown /> */}
                <PremiumDepartmentDashboard />
                <MentalHealthApp />
            </div>
        </div>
    );
};

export default Home;
