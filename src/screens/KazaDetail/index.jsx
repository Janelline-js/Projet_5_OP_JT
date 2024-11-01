import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { routes } from '../../routes'
import SlideShowComponent from '../../components/SlideShow'
import CollapseComponent from '../../components/Collapse'
import FeaturesComponent from '../../components/Features'

const KazaDetail = () => {
    const { id } = useParams()
    const [kasa, setKasa] = useState({})
    const navigate = useNavigate()

    const fetchKazas = async () => {
        const response = await fetch("/logements.json", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const data = await response.json()

        const kasa = data.find((kasa) => kasa.id === id)

        if (!kasa || Object.keys(kasa).length <= 0) {
            navigate(routes.notFound)

            return
        }
        setKasa(kasa)


    }

    useEffect(() => {
        fetchKazas()
    }, [])

    if (Object.keys(kasa).length <= 0) {
        return <p>Chargement...</p>
    }

    return (
        <main>
            <SlideShowComponent pictures={kasa.pictures} />

            <FeaturesComponent tags={kasa.tags} location={kasa.location} title={kasa.title} rating={kasa.rating} host={kasa.host} />
            <div className='collapser-wrapper_features collapser-wrapper'>

                <CollapseComponent title="Description" description={kasa.description} />
                <CollapseComponent title="Equipements" list={kasa.equipments} />
            </div>

        </main>
    )
}

export default KazaDetail