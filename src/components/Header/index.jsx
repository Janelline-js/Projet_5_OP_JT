import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import logo from '../../image/logo.svg'
import { useLocation } from 'react-router-dom'

const HeaderComponent = () => {
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState(location.pathname)

    useEffect(() => {
        setCurrentLocation(location.pathname)
        document.title = location.pathname === routes.home ? 'Accueil - Kasa' : location.pathname === routes.about ? 'A propos - Kasa' : 'Kasa'
    }, [location]);

    return (
        <header>
            <img src={logo} alt='kaza' />
            <nav>
                <Link to={routes.home} style={{ textDecoration: currentLocation === routes.home ? 'underline' : 'none' }}>Accueil</Link>
                <Link to={routes.about} style={{ textDecoration: currentLocation === routes.about ? 'underline' : 'none' }}>A propos</Link>
            </nav>
        </header>
    )
}

export default HeaderComponent