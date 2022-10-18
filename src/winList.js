import React from 'react'
import Todo from './winLayout';


function TodoList({todos}) {
  return (
    <>
      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}


export default TodoList;