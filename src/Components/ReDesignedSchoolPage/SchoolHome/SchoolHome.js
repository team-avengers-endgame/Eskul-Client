import React from 'react';
import QuickScroll from '../../Home/QuickScroll/QuickScroll';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../../Shared/SharedBanner/SharedBanner';
import SchoolListPage from '../SchoolListPage/SchoolListPage';

const SchoolHome = () => {
    return (
        <div>
            <NavigationBar />
            <SharedBanner pageName={"All Schools in Bangladesh"} />
            <SchoolListPage />
            <Footer />
            <QuickScroll />
        </div>
    );
};

export default SchoolHome;