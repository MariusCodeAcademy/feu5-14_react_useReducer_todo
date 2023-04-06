import React, { useReducer, useState } from 'react';

const initTodos = [
  { id: 1, value: 'Buy Eggs', done: false, date: '' },
  { id: 2, value: 'Go to Shopping', done: true, date: '' },
  { id: 3, value: 'Do a 100 pushups', done: false, date: '' },
];

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      console.error('type not found');
  }
}

function Todo() {
  const [state, dispatch] = useReducer(todosReducer, initTodos);
  const [newInputVal, setNewInputVal] = useState('');
  console.log('state ===', state);
  /* Tasks
  // sukurti useReducer() fn
  // atvaizduoti sarasa is state
  // padaryti kad eitu prideti todo
  // padaryti kad eitu istrinti todo
  // suskaidyti i atskirus komponentus */

  function submitHandler(e) {
    e.preventDefault();
    // paimti input reikme
    // pagaminti todo obj
    // ideti i todos su dispach
    const newTodoObj = {
      id: 4,
      value: newInputVal,
      done: false,
      date: new Date().toLocaleTimeString(),
    };
    //       /              action                   /
    dispatch({ type: 'ADD_TODO', payload: newTodoObj });
    setNewInputVal('');
  }

  // fn deleteHandler

  return (
    <div>
      <h2>Welcome to our Todo</h2>

      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Add todo</legend>
          <input
            value={newInputVal}
            onChange={(e) => setNewInputVal(e.target.value)}
            type="text"
            placeholder="Add todo"
          />
          <button type="submit">Add</button>
        </fieldset>
      </form>

      {/* <TodoList list={todos} */}
      <ul>
        {/* <TodoItem item={item} */}
        {state.map((tObj) => (
          <li key={tObj.id}>
            {tObj.value} <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
