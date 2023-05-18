import React, { useEffect, useState } from 'react'
import '../Styles/Task.css'

const Task = () => {
    const [task, settask] = useState();
    console.log(task, "task");

    useEffect(() => {
        fetch("http://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(json => settask(json))
    }, [])
    console.log(task, "hello");
    return (
        <div id='taskfullpage'>
                {task && task.map((e) => (
                    <div id='page'>
<p>{e.completed}</p>
<p>{e.title}</p>
<p>{e.userId}</p>
                    </div>
                ))}
        </div>
    )
}

export default Task
