import React, {useState, useEffect  } from 'react'
import style from './DateTime.module.css'

const DateTime = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup(){
            clearInterval(timer)
        }
    })

    return (
        <div>
            <p className={style.date}> {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateTime
