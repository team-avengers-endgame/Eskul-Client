import React from 'react';
import QuickScroll from '../../Home/QuickScroll/QuickScroll';
import Banner from '../../SchoolDetails/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import LayoutDetails from '../LayoutDetails/LayoutDetails';

const DetailsHome = () => {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <LayoutDetails />
      <Footer />
      <QuickScroll />
    </div>
  );
};

export default DetailsHome;