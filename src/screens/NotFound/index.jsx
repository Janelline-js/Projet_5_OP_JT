import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import errorlogo from '../../image/404.svg'
import '../../sass/components/404.scss'

const NotFoundScreen = () => {
    return (
        <main className='error_message'>
            <img src={errorlogo} alt="404"/>
            <p>Oops ! La page que vous demandez n'existe pas.</p>
            <Link to={routes.home}>Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default NotFoundScreen