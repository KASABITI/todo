import React from 'react'
import style from './Header.module.css'

function Header() {
    return (
        <div>
            <header className={style.header}>
                <h1 className={style.title}>TODO</h1>
                <p className={style.avatar}>R</p>
                
            </header>
        </div>
    )
}

export default Header
