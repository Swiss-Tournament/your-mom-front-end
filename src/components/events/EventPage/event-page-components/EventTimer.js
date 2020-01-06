import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function EventTimer() {
  const [time, setTime] = useState(0)
  const [timerRunning, updateTimerRunning] = useState(false)

  useEffect(() => {
    if(timerRunning) {
      const interval = setInterval(() => {
          setTime(time => time-1)
        }, 1000);
      return () => clearInterval(interval)
    }
  }, [timerRunning])

  useEffect(()  => {
    if(time < 1) {
      setTime(10*300);
    }
  }, [time]);

  return (
    <TimerWrapper>
    <Timer>
      {`${(Math.floor(time/60)).toString().padStart(2, '0')}:${(time%60).toString().padStart(2, '0')}`}
    </Timer>
    {!timerRunning ? (
      <Button onClick={() => updateTimerRunning(!timerRunning)}>Start</Button>
    ) : (
      <Button onClick={() => updateTimerRunning(!timerRunning)}>Pause</Button>
    )}
    </TimerWrapper>
  )
}

export default EventTimer;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
  margin: 0 auto;
  width: 50%;
`

const Timer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  width: 100%;
`

const Button = styled.button`
    max-width: 35rem;
    width: 100%;
    min-height: 4rem;
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