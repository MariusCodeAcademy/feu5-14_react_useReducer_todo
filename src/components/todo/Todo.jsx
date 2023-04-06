import React from 'react';

function Todo() {
  return (
    <div>
      <h2>Welcome to our Todo</h2>

      <form>
        <fieldset>
          <legend>Add todo</legend>
          <input type="text" placeholder="Add todo" />
          <button type="submit">Add</button>
        </fieldset>
      </form>

      <ul>
        <li>Buy Milk</li>
        <li>Do sports</li>
        <li>Pet a cat</li>
      </ul>
    </div>
  );
}

export default Todo;
