import React, { useReducer } from 'react';
import styled from 'styled-components';
import Card from './../ui/card/Card';
import { useState } from 'react';

const initState = { value: 0 };

// reducerio funkcija. komponento veiksmu logika ir eiga.
// turi grazinti state busena kokia turi po pakeitimu
function counterReducer(state, action) {
  console.log('counterReducer ivyko');
  console.log('state ===', state);
  console.log('action ===', action);

  switch (action.type) {
    case 'UP':
      return { value: state.value + 1 };
    case 'UP_BY':
      return { value: state.value + action.payload };
    case 'DOWN':
      // jei reikme taps neigiama nemazinam
      if (state.value - 1 < 0) {
        console.log('gausim neigiama');
        return { value: 0 };
      }
      return { value: state.value - 1 };
    case 'RESET':
      return initState;
    default:
      throw new Error('nera tokio dispach type');
  }
}

function Counter() {
  // const [state, setValue] = useState(initState);
  const [state, dispach] = useReducer(counterReducer, initState);
  // fn handleUp
  function handleUp() {
    // setValue({ value: state.value + 1 });
    dispach({ type: 'UP' });
  }

  function handleUpBy(howMuch) {
    // setValue({ value: state.value + 1 });
    dispach({ type: 'UP_BY', payload: howMuch });
    // { type: 'UP_BY' } === action counterReducer funkcijoje
  }

  // fn hadnleDown
  function hadnleDown() {
    // setValue({ value: state.value - 1 });
    dispach({ type: 'DOWN' });
  }

  // fn handleReset()
  function handleReset() {
    dispach({ type: 'RESET' });
  }
  // padaryti kad reset nunulintu value

  // kada green turi buti true?
  const arGreen = state?.value > 5;

  return (
    <Card>
      <h2>Counter</h2>
      <Value green={arGreen}>{state?.value}</Value>
      <div className="control">
        <button onClick={handleUp}>Up</button>
        <button onClick={hadnleDown}>Down</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => handleUpBy(5)}>Up by 5</button>
      </div>
    </Card>
  );
}

const Value = styled.p`
  font-size: 50px;
  font-weight: normal;
  color: ${(props) => (props.green ? 'green' : '#000')};
`;

export default Counter;
