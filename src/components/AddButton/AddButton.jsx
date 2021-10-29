import React from 'react';
import style from'./AddButton.module.css'

const AddButton = () => {
    return (
        <button  type="submit" className={style.button}>
            <p>Add Task</p>
        </button>
    )
}

export default AddButton
