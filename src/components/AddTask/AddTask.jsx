import React, {useState} from 'react'
import AddButton from '../AddButton/AddButton'
import style from './AddTask.module.css'


const AddTask = () => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${value} task was submitted `);
        setValue("");
    }
    const handleChange = (e) => {
        setValue(e.currentTarget.value)
        console.log(e.currentTarget.value)

    }
    

    return (
        <form 
            className={style.newtask} 
            onSubmit={handleSubmit}
            >
            <input 
                type="text" 
                value={value} 
                placeholder="Enter task..."
                onChange={handleChange}
                />
            <AddButton/>
        </form>
        
    )
}

export default AddTask
