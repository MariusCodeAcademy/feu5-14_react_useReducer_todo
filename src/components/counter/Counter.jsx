import React from 'react';
import styled from 'styled-components';
import Card from './../ui/card/Card';
import { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);

  // fn handleUp
  function handleUp() {
    setValue(value + 1);
  }

  // fn hadnleDown
  function hadnleDown() {
    setValue(value - 1);
  }

  return (
    <Card>
      <h2>Counter</h2>
      <Value>{value}</Value>
      <div className="control">
        <button onClick={handleUp}>Up</button>
        <button onClick={hadnleDown}>Down</button>
      </div>
    </Card>
  );
}

const Value = styled.p`
  font-size: 50px;
  font-weight: normal;
`;

export default Counter;
