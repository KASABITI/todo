import React from 'react'
import style from './Checkbox.module.css'
import {useState} from 'react'

const Checkbox = (props) => {
    const [checked, setChecked] = useState(false)
    const [border, setBorder] = useState(false)
    return (
           <div
             className={
                 `
                 ${style.checkbox} ${checked ? style.checked : style.unchecked}
                 ${checked ? style.task_border : ''}
                 `}
             onClick={() => setChecked(!checked)}
            handleOnClick ={() => setBorder(!border)}
             >
         </div>
    )
}

export default Checkbox
