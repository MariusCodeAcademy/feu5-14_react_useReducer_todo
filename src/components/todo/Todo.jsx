import React, { useReducer, useState } from 'react';

const initTodos = [
  { id: 1, value: 'Learn React', done: false, date: '' },
  { id: 2, value: 'Make a website', done: true, date: '' },
  { id: 3, value: 'Debug a bug', done: false, date: '' },
  { id: 4, value: 'Refactor spaghetti code', done: false, date: '' },
];

function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      console.log('delete', action.payload);
      return state.filter(({ id }) => id !== action.payload);
    default:
      console.error('type not found');
  }
}

function Todo() {
  const [state, dispatch] = useReducer(todosReducer, initTodos);
  const [newInputVal, setNewInputVal] = useState('');
  // console.log('state ===', state);
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
      id: 5,
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
            {tObj.value}{' '}
            <button
              onClick={() =>
                dispatch({ type: 'DELETE_TODO', payload: tObj.id })
              }
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
