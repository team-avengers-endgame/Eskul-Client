import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';
import NotesList from './NotesList';

const NotesPage = () => {
    return (
        <div>
            <NavigationBar />
            <SharedBanner pageName={"Notes"} />
            <NotesList />


        </div>
    );
};

export default NotesPage;