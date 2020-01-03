import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import ActionsContext from '../../context/Actions';

const Login = ({ history }) => {
    const error = useSelector(state => state.auth.error)
    console.log(error)

    const { register, handleSubmit, errors } = useForm({
        validationSchema: LoginSchema
    });

    const { auth } = useContext(ActionsContext);

    const onSubmit = data => { 
        console.log('Before Submit', data);
        auth.login(data, history) }; 
    
    return (
        <Form className='login' onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign In</h1>
            <HR />
            {error && (
                <Paragraph>{error.data.message}</Paragraph>
            )}
            <label>E-mail:</label>
            <Input name='email' id='email'  ref={register} />
            {errors.email && <p className='errors'>{errors.email.message}</p>}
            
            <label>Password:</label>
            <Input type='password' name='password' id='password' ref={register} />
            {errors.password && <p className='errors'>{errors.password.message}</p>}
            <Button type='submit'>Submit</Button>
            <Link to="/register">Need an account? Register here!</Link>
        </Form>
    )
}

const LoginSchema = yup.object().shape({
    email: yup.string().required('This is a required field.'),
    password: yup.string().required('Password is required.'),
})

export default Login;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 5% auto;
    padding: 1%;
    width: 30%;
    min-height: 350px;
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

const Paragraph = styled.p`
  font-size: 1.6rem;
  margin: 1% auto;
  padding: none;
  color: red;
`;