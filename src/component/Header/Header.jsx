import React from 'react'
import style from './Header.module.css'

function Header() {
    return (
        <div>
            <header className={style.header}>
                <h1 className={style.title}>Todo</h1>
                <p className={style.avatar}>T</p>
                
            </header>
        </div>
    )
}

export default Header
