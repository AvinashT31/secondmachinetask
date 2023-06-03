// import React, { useEffect, useState } from 'react'
// import '../Styles/Task.css'

// const Task = () => {

//   const [todoData, settodoData] = useState();
//   console.log(todoData, "todoData");

//   useEffect(() => {
//     fetch("http://jsonplaceholder.typicode.com/todos ")
//       .then(res => res.json())
//       .then(json => settodoData(json))
//   }, [])


//   function deleteTodo(todoId) {
//     const filter = todoData.filter(todo => todoId !== todo.id);
//     // console.log(filter, "hello");
//     settodoData(filter);
//   }

//   return (
//     <div id='taskfullpage'>
//       <div id='taskpage'>
//         {todoData && todoData.map((e, i) => (
//           <div id='task' key={i}>
//             <p>{e.id}</p>
//             <p>{e.title}</p>
//             {e.completed ? (<p>True</p>) : (<p>False</p>)}
//             <button onClick={() => deleteTodo(e.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Task


import React, { useEffect, useState } from 'react';
import '../Styles/Task.css';

const Task = () => {
  const [todoData, setTodoData] = useState([]);
  

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json => setTodoData(json));
  }, []);

  const deleteTodo = (todoId) => {
    const updatedTodos = todoData.filter(todo => todo.id !== todoId);
    setTodoData(updatedTodos);
  };

  const [newTodo, setNewTodo] = useState('');
  const addTodo = () => {
    const newTodoItem = {
      id: todoData.length + 1,
      title: newTodo,
      completed: false
    };
    const updatedTodos = [...todoData, newTodoItem];
    setTodoData(updatedTodos);
    setNewTodo('');
  };

  return (
    <div id='taskfullpage'>
      <div id='taskpage'>
        {todoData.map((e, i) => (
          <div id='task' key={i}>
            <p>{e.id}</p>
            <p>{e.title}</p>
            {e.completed ? <p>True</p> : <p>False</p>}
            <button onClick={() => deleteTodo(e.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default Task;
