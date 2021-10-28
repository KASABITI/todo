import React from 'react'
import style from './Checkbox.module.css'


const Checkbox = (props) => {

    return (
           <div 
             className={`${style.checkbox} ${props.checked ? style.checked : style.unchecked}`}
             onClick={props.onCheck}
           >
           </div>
    )
}

export default Checkbox


