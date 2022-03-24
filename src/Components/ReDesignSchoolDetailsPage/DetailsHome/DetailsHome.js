import React from 'react';
import Banner from '../../SchoolDetails/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import LayoutDetails from '../LayoutDetails/LayoutDetails';

const DetailsHome = () => {
  return (
    <div>
      <NavigationBar />
      <Banner />
      {/* <TopBar /> */}
      <LayoutDetails />
      <Footer />
    </div>
  );
};

export default DetailsHome;