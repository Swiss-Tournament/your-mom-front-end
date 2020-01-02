import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const Login = () => {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: LoginSchema
    });
    const onSubmit = data => { console.log(data) }; 
    
    return (
        <form className='login' onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>
            <label>User Name:</label>
            <input name='username' id='username'  ref={register} />
            
            <label>Password:</label>
            <input type='password' name='password' id='password' ref={register} />
            <input type='submit' />
        </form>
    )
}

const LoginSchema = yup.object().shape({
    username: yup.string().required('This is a required field.'),
    password: yup.string().required('Password is required.'),
})

export default Login;