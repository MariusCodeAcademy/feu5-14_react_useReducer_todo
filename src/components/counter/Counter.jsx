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
  if (action.type === 'UP') {
    return { value: state.value + 1 };
  } else if (action.type === 'DOWN') {
    return { value: state.value - 1 };
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

  // fn hadnleDown
  function hadnleDown() {
    // setValue({ value: state.value - 1 });
    dispach({ type: 'DOWN' });
  }

  // fn handleReset()
  // padaryti kad reset nunulintu value

  return (
    <Card>
      <h2>Counter</h2>
      <Value>{state?.value}</Value>
      <div className="control">
        <button onClick={handleUp}>Up</button>
        <button onClick={hadnleDown}>Down</button>
        <button onClick={hadnleDown}>Reset</button>
      </div>
    </Card>
  );
}

const Value = styled.p`
  font-size: 50px;
  font-weight: normal;
`;

export default Counter;
