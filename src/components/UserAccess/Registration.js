import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import AuthActions from '../../context/Actions';

const Registration = ({history}) => {

   const { auth } = useContext(AuthActions);

    const { register, handleSubmit, errors } = useForm({
        validationSchema: RegistrationSchema
    });
    const onSubmit = ({firstName, lastName, email, username, password, location}) => { 
      console.log("Registering user...");
      console.log({firstName, lastName, email, username, password, location}) 
      auth.register({firstName, lastName, email, username, password, location}, history);
   }; 
    
    return (
        <Form className='registration' onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            <HR />
            <label htmlFor='firstName'>First Name:</label>
            <Input name='firstName' id='firstName'  ref={register} />
            {errors.firstName && <p className='errors'>{errors.firstName.message}</p>}
            
            <label htmlFor='lastName'>Last Name:</label>
            <Input name='lastName' id='lastName'  ref={register} />
            {errors.lastName && <p className='errors'>{errors.lastName.message}</p>}

            <label htmlFor='email'>Email:</label>
            <Input name='email' id='email'  ref={register} />
            {errors.email && <p className='errors'>{errors.email.message}</p>}
            
            <label htmlFor='username'>Desired User Name:</label>
            <Input name='username' id='username'  ref={register} />
            {errors.username && <p className='errors'>{errors.username.message}</p>}

            <label htmlFor='location'>Address:</label> 
            <Input name='location' id='location'  ref={register} />
            {errors.location && <p className='errors'>{errors.location.message}</p>}
                        
            <label htmlFor='password'>Password:</label>
            <Input type='password' name='password' id='password' ref={register} />
            {errors.password && <p className='errors'>{errors.password.message}</p>}
                        
            <label htmlFor='password2'>Re-Type Password:</label>
            <Input type='password' name='passwordConfirm' id='passwordConfirm' ref={register} />
            {errors.passwordConfirm && <p className='errors'>{errors.passwordConfirm.message}</p>}
            
            <Button type='submit'>Sumbit</Button>
            <Link to="/login">Already have an account? Login here!</Link>
        </Form>
    )
}

const RegistrationSchema = yup.object().shape({
    firstName: yup.string().required('This is a required field.').min(3),
    lastName: yup.string().required('This is a required field.').min(3),
    email: yup.string().email('Enter a valid email address.').required('This is a required field.'),
    username: yup.string().required('This is a required field.').min(6).max(20),
    password: yup.string().required('Password is required.').min(8).max(20),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null]).required('Password confirm is required'),
    location: yup.string()
})

export default Registration;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 5% auto;
    padding: 1%;
    width: 30%;
    min-height: 500px;
    height: 100%;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 3px 5px;
`

const Input = styled.input`
    max-width: 40rem;
    width: 100%;
    min-height: 4rem;
    height: 100%;
    padding: 1%;
    margin: 1% auto;
    font-size: 1.4rem;
`

const Button = styled.button`
    max-width: 35rem;
    width: 100%;
    min-height: 4rem;
    height: 100%;
    padding: 1%;
    margin: 1% auto;
    font-size: 1.3rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background: #D9B64E;
    cursor: pointer;

    &:hover {
        background: #D9BE3B;
        transform: scale(1.03)
    }
`

const HR = styled.hr`
    width: 8%;
    border: .3rem solid black;
    border-radius: 20px;
`