import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import logo from '../../image/logo.svg'

const HeaderComponent = () => {
    return (
        <header>
            <img src={logo} alt='kaza' />
            <nav>
                    <Link to={routes.home}>Accueil</Link>
                    <Link to={routes.about}>A propos</Link>
            </nav>
            </header>
    )
}

export default HeaderComponent