import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const Registration = () => {

    const { register, handleSubmit, errors } = useForm({
        validationSchema: RegistrationSchema
    });
    const onSubmit = data => { console.log(data) }; 
    
    return (
        <form className='registration' onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            <label htmlFor='firstname'>First Name:</label>
            <input name='firstname' id='firstname'  ref={register} />
            {errors.firstname && <p className='errors'>{error.firstname.message}</p>}
            
            <label htmlFor='lastname'>Last Name:</label>
            <input name='lastname' id='lastname'  ref={register} />
            {errors.lastname && <p className='errors'>{error.lastname.message}</p>}

            <label htmlFor='email'>Email:</label>
            <input name='email' id='email'  ref={register} />
            {errors.email && <p className='errors'>{error.email.message}</p>}
            
            <label htmlFor='username'>Desired User Name:</label>
            <input name='username' id='username'  ref={register} />
            {errors.username && <p className='errors'>{error.username.message}</p>}
                        
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password' ref={register} />
            {errors.password && <p className='errors'>{error.password.message}</p>}
                        
            <label htmlFor='password2'>Re-Type Password:</label>
            <input type='password' name='passwordConfirm' id='passwordConfirm' ref={register} />
            {errors.passwordConfirm && <p className='errors'>{error.passwordConfirm.message}</p>}last
            
            <input type='submit' />
        </form>
    )
}

const RegistrationSchema = yup.object().shape({
    firstname: yup.string().required('This is a required field.').min(3),
    lastname: yup.string().required('This is a required field.').min(3),
    email: yup.string().email('Enter a valid email address.').required('This is a required field.'),
    username: yup.string().required('This is a required field.').min(6).max(20),
    password: yup.string().required('Password is required.').min(8).max(20),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null]).required('Password confirm is required')
})

default export Registration;