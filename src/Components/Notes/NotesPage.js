import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';
import NotesList from './NotesList';

const NotesPage = () => {
    return (
        <div>
            <NavigationBar />
            <SharedBanner pageName={"Notes"} />
            <NotesList />
            <Footer/>


        </div>
    );
};

export default NotesPage;