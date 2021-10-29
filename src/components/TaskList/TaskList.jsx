import React from 'react';
import style from'./TaskList.module.css';
import Task from '../Task/Task';

const TaskList = ({items}) => {
  
    return (
        <div className={style.tasklist}>
          {
              items.map(item =>(
                  <Task 
                    key={item.id} 
                    task={item.task}
                  />
              ))
          }
        </div>
    )
}

export default TaskList
