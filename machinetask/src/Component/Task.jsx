import React, { useEffect, useState } from 'react'
import '../Styles/Task.css'

const Task = () => {

    const[ todoData, settodoData] = useState();
    console.log(todoData,  "todoData");

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/todos ")
        .then(res => res.json())
        .then(json => settodoData(json))
    }, [])

  return (
    <div id='taskfullpage'>
      <div id='taskpage'>
          {todoData && todoData.map((e) => (
            <div id='task'>
              <p>{e.id}</p>
             <p>{e.title}</p>
             <p>{e.completed}</p> 
             <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Task