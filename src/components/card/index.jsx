import React from 'react'
import '../../sass/components/card.scss'
import { Link } from "react-router-dom"
import { routes } from '../../routes'

const CardComponent = (props) => {
    const { title, id, image } = props
    return (


        <Link to={routes.kazaDetail.replace(":id", id)} className='kaza_card'>
            <div className='kaza_card_img' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.30)), url(${image})` }}></div>
            <p>{title}</p>



        </Link>

    )
}

export default CardComponent