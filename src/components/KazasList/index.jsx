import React, { useEffect, useState } from 'react'
import CardComponent from '../card'

const KazasList = () => {
    const [loading, setLoading] = useState(true);
    const [KazasList, setKazasList] = useState([]);


    const fetchKazas = async () => {
         const response = await fetch('logements.json');
         const data = await response.json()
  
    setKazasList(data);
    setLoading(false);
    }

    useEffect(() => {
        fetchKazas();
    }, []);


    if (loading) {
        return <h1>Chargement...</h1>
    }

    return (
        <div className='menu_card'>
            {!KazasList.length ? 
                <p>Aucun logement disponible pour le moment...</p>
            : KazasList.map((data,index) => {
                return (
                    <CardComponent key={data.id} id={data.id} title={data.title}  />
                )
            })}
        </div>
    )
}

export default KazasList