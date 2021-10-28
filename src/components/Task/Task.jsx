import React from "react";
import style from "./Task.module.css";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";



function Task(props) {
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked(!checked)
  }
  return (
    <div className={`${style.task} ${checked ? "" : style.taskborder}`}>
      <div>
        <h5 className={style.title}>{props.task}</h5>
        <p className={style.caption}>{props.date}</p>
      </div>
      <Checkbox 
          onCheck={handleCheck}
          checked={checked}
      />
    </div>
  );
}

export default Task;
