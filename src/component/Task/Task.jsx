import React from 'react'
import style from './Task.module.css'
import Checkbox from '../Checkbox/Checkbox'
import AddButton from '../AddButton/AddButton'

function Task(props) {
    return (
        <div className={style.task}>
            <div>
                <h5 className={style.title}>My task</h5>
                <p className={style.caption}>{props.date}</p>
                <AddButton/>
            </div>
            <Checkbox className={style.checkbox}/>
        </div>
    )
}

export default Task
