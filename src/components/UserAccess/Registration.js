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
            <label htmlFor='firstName'>First Name:</label>
            <input name='firstName' id='firstName'  ref={register} />
            {errors.firstName && <p className='errors'>{errors.firstName.message}</p>}
            
            <label htmlFor='lastName'>Last Name:</label>
            <input name='lastName' id='lastName'  ref={register} />
            {errors.lastName && <p className='errors'>{errors.lastName.message}</p>}

            <label htmlFor='email'>Email:</label>
            <input name='email' id='email'  ref={register} />
            {errors.email && <p className='errors'>{errors.email.message}</p>}
            
            <label htmlFor='username'>Desired User Name:</label>
            <input name='username' id='username'  ref={register} />
            {errors.username && <p className='errors'>{errors.username.message}</p>}

            <label htmlFor='location'>Address:</label> 
            <input name='location' id='location'  ref={register} />
            {errors.location && <p className='errors'>{errors.location.message}</p>}
                        
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password' ref={register} />
            {errors.password && <p className='errors'>{errors.password.message}</p>}
                        
            <label htmlFor='password2'>Re-Type Password:</label>
            <input type='password' name='passwordConfirm' id='passwordConfirm' ref={register} />
            {errors.passwordConfirm && <p className='errors'>{errors.passwordConfirm.message}</p>}
            
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
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null]).required('Password confirm is required')
})

export default Registration;