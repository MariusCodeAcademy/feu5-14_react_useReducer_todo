import React from 'react';
import styled from 'styled-components';
import Card from './../ui/card/Card';

function Counter() {
  // fn handleUp

  // fn hadnleDown

  return (
    <Card>
      <h2>Counter</h2>
      <Value>0</Value>
      <div className="control">
        <button>Up</button>
        <button>Down</button>
      </div>
    </Card>
  );
}

const Value = styled.p`
  font-size: 50px;
  font-weight: normal;
`;

export default Counter;
