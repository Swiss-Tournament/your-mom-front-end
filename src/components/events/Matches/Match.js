import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';


const Match = (props) => {
    
    const { register, handleSubmit, errors } = useForm({
        validationSchema: MatchSchema
    });

    const onSubmit = data => { 
        console.log('Before Submit', data);
        }; 
    
    return (
        <div className='match-container'>
            <div className='info-container'>
                <p>{props.eventName}</p>
                <p>Round: {props.currentRound}</p>
            </div>

            <form className='round-results' onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor='playerOne'>Player 1: {props.player1}</label>
                <input name='playerOne' id='playerOne'  placeholder='0' ref={register} />
                {errors.playerOne && <p className='errors'>{errors.playerOne.message}</p>}

                <label htmlFor='playerOneDrop'>Drop? {props.player1}</label>
                <input type='checkbox' name='playerOneDrop' id='playerOneDrop'  ref={register} />
                {errors.playerOneDrop && <p className='errors'>{errors.playerOneDrop.message}</p>}

                <label htmlFor='playerTwo'>Player 2: {props.player2}</label>
                <input name='playerTwo' id='playerTwo' placeholder='0' ref={register} />
                {errors.playerTwo && <p className='errors'>{errors.playerTwo.message}</p>}

                <label htmlFor='playerTwoDrop'>Drop? {props.player2}</label>
                <input type='checkbox' name='playerTwoDrop' id='playerTwoDrop'  ref={register} />
                {errors.playerTwoDrop && <p className='errors'>{errors.playerTwoDrop.message}</p>}

                <label htmlFor='gamesDrawn'>Draws: {props.gamesDrawn}</label>
                <input name='gamesDrawn' id='gamesDrawn' placeholder='0' ref={register} />
                {errors.gamesDrawn && <p className='errors'>{errors.gamesDrawn.message}</p>}

                <button type='submit'>Submit Results</button>
            </form>
        </div>
    )
}

const MatchSchema = yup.object().shape({
    playerOne: yup.string().required('This is a required field.').max(2),
    playerTwo: yup.string().required('This is a required field.').max(2),
    gamesDrawn: yup.string().required('This is a required field.'),
    playerOneDrop: yup.boolean(),
    playerTwoDropL: yup.boolean()
})

export default Match