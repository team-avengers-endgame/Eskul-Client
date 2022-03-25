import React from 'react';
import QuickScroll from '../Home/QuickScroll/QuickScroll';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';
import NotesList from './NotesList';

const NotesPage = () => {
    return (
        <div>
            <NavigationBar />
            <SharedBanner pageName={"Read Our Connection!"} />
            <NotesList />
            <Footer />
            <QuickScroll />

        </div>
    );
};

export default NotesPage;