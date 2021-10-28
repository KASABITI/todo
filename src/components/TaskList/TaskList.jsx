import React from 'react';
import style from'./TaskList.module.css';
import Task from '../Task/Task';

const ListTask = () => {
    const items =[
        {
            task:"Learn Reactjs",
            id:1
        }, 
        {
            task:"Play guitare",
            id:2
        }, 
        {
            task:"Chilling with family",
            id:3
        }, 
        {
            task:"Go to church",
            id:4
        }
    ]

    return (
        <div className={style.tasklist}>
          {
              items.map(item =>(
                  <Task key={item.id} task={item.task}/>
              ))
          }
        </div>
    )
}

export default ListTask
