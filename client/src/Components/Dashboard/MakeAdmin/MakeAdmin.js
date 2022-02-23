import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import { ButtonStyle } from '../../../Hooks/useStyle';
const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();
    };


    return (
        <>
            <h1>Make a admin form</h1>
            <Box sx={{ maxWidth: 400 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField size='small' fullWidth label="Email" placeholder='Email'{...register("email", { required: true })} />
                    {errors.email && <span>This admin field is required</span>} <br /> <br />
                    <Button type='submit' fullWidth sx={ButtonStyle}>Make Admin</Button>
                </form>
            </Box>
        </>
    );
};

export default MakeAdmin;