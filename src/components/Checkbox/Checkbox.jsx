import React from 'react'
import style from './Checkbox.module.css'
import {useState} from 'react'

const Checkbox = () => {
    const [checked, setChecked] = useState(false)
    return (
           <div
             className={`${style.checkbox} ${checked ? style.checked : style.unchecked}`}
             onClick={() => setChecked(!checked)}>
         </div>
    )
}

export default Checkbox
