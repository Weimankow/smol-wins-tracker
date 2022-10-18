import React from 'react'
import Todo from './winLayout';


function TodoList({todos, removeTodo}) {
  return (
    <>
      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <Todo key={todo.id} 
          todo={todo}
          removeTodo={removeTodo}
           />
        ))}
      </ul>
    </>
  );
}


export default TodoList;