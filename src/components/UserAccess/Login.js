import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }; 
    
    return (
        <form className='registration' onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>
            <label>User Name:</label>
            <input name='username' id='username'  ref={register({ required: true})} />
            
            <label>Password:</label>
            <input type='password' name='password' id='password' ref={register({required: true})} />
            <input type='submit' />
    </form>
    )
}

