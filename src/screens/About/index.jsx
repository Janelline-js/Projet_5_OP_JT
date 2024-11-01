import React, { useState, useEffect } from 'react'
import BannerComponent from '../../components/banner'
import banner from '../../image/kalen-emsley.webp'
import CollapseComponent from '../../components/Collapse'

const AboutScreen = () => {
  
const collapses = [
  { 
    "name": "Fiabilité",
    "description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    "name":"Respect",
    "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    
  },
  {
    "name":"Service",
    "description":"La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires soit empreinte de respect et de bienveillance.",
    
  },
  {
    "name":"Sécurité",
    "description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logements correspsond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifer que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
   }
]
  

  return (
    <main>
      <BannerComponent banner={banner} page={"about"} ><></></BannerComponent>
      
      <div className='collapser-wrapper_about collapser-wrapper'>  {collapses.map((collapse,index)=><CollapseComponent title={collapse.name} key={index} description={collapse.description} />)}
      </div>
    
    </main>
  )
}

export default AboutScreen