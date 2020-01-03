import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import ActionsContext from '../../context/Actions';

const Login = () => {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: LoginSchema
    });

    const { auth } = useContext(ActionsContext);

    const onSubmit = data => { 
        console.log('Before Submit', data);
        auth.login(data) }; 
    
    return (
        <form className='login' onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>
            <label>E-mail:</label>
            <input name='email' id='email'  ref={register} />
            {errors.email && <p className='errors'>{errors.email.message}</p>}
            
            <label>Password:</label>
            <input type='password' name='password' id='password' ref={register} />
            {errors.password && <p className='errors'>{errors.password.message}</p>}
            <input type='submit' />
        </form>
    )
}

const LoginSchema = yup.object().shape({
    email: yup.string().required('This is a required field.'),
    password: yup.string().required('Password is required.'),
})

export default Login;