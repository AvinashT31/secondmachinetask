import React, { useEffect, useState } from 'react'
import '../Styles/Task.css'

const Task = () => {

    const[ todoData, settodoData] = useState();
    console.log(todoData,  "todoData");

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/todos ")
        .then(res => res.json())
        .then(json => json)
    }, [])
  return (
    <div id='taskfullpage'>
      <div id='taskpage'>

      </div>
    </div>
  )
}

export default Task