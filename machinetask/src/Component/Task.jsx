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
          {todoData && todoData.map((e,i ) => (
            <div id='task' key={i}>
              <p>{e.id}</p>
             <p>{e.title}</p>
             {e.completed ? (<p>True</p>) : (<p>False</p>)} 
             <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Task