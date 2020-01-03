import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function EventTimer() {
  const [time, setTime] = useState()

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(prevTime => { 
        if (prevTime > 0) { 
          setTime(prevTime - 1);
        } 
      })
    }, 50000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <Timer>
      {`${(Math.floor(time/60)).toString().padStart(2, '0')}:${(time%60).toString().padStart(2, '0')}`}
    </Timer>
  )
}

export default EventTimer;

const Timer = styled.div`
  display: flex;
`