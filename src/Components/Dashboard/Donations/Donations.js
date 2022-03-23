import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { api } from '../../../Hooks/Api';


const Donations = () => {
    const [donations, setOrder] = useState([]);

    useEffect(() => {
        fetch(`${api}/allDonation`)
            .then((res) => res.json())
            .then((data) => {
                setOrder(data);
            });
    }, []);

    return (
        <div>
            {
                donations.map(donation =>
                    <Box>
                        <h1>{donation?.cus_name}</h1>
                        <h1>{donation?.cus_email}</h1>
                        <h1>{donation?.total_amount}</h1>
                        <h1>{donation?.cus_postcode}</h1>

                        <h1>{donation?.cus_city}</h1>
                        <h1>{donation?.cus_add1}</h1>
                        <h1>{donation?.ocupation}</h1>
                        <h1>{donation?.date}</h1>
                    </Box>
                )
            }

        </div>
    );
};

export default Donations;