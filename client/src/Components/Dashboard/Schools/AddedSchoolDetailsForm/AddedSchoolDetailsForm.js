import React from 'react';
import AddAStudent from './AddAStudent/AddAStudent';
import AddATreacher from './AddATreacher/AddATreacher';

const AddedSchoolDetailsForm = () => {
    return (
        <div>
            <AddATreacher />
            <AddAStudent />
        </div>
    );
};

export default AddedSchoolDetailsForm;