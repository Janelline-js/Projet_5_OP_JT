import React from 'react'
import '../../sass/components/card.scss'
import {Link} from "react-router-dom"
import { routes } from '../../routes'

const CardComponent = (props) => {
    const {title,id} = props
    return (

        
            <Link to={routes.kazaDetail.replace(":id",id)} className='kaza_card'>
                 <p>{title}</p>
                 

            </Link>
    
    )
}

export default CardComponent