import { Alert, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { api } from '../../../../Hooks/Api';
import useAuth from '../../../../Hooks/useAuth';

const MyDonations = () => {
    const { user } = useAuth();
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch(`${api}/myDonation/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDonations(data)

            });
    }, [user?.email])

    console.log(donations)
    return (
        <div>
            {
                donations.map(donation =>
                    <Box>
                        <Alert severity="success">
                        <h1>{donation?.cus_name}</h1>
                        <h1>{donation?.cus_email}</h1>
                        <h1>{donation?.total_amount}</h1>
                        <h1>{donation?.cus_postcode}</h1>
                        <h1>{donation?.cus_city}</h1>
                        <h1>{donation?.cus_add1}</h1>
                        <h1>{donation?.ocupation}</h1>
                        <h1>{donation?.date}</h1>

                        </Alert>
                      
                    </Box>
                )
            }
        </div>
    );
};

export default MyDonations;