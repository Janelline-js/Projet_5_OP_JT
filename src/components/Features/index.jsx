import React, { useEffect,useState } from 'react'
import '../../sass/components/features.scss'

const FeaturesComponent = ({ tags, location, title, rating, host }) => {

    const [stars, setStars] = useState([])
    const [nones, setNones] = useState([])

    const displayRatings = ()=>{
        console.log(rating)
        
        const numberStars = []
        const numberNones = []
            for(let index=0; index<rating; index++) {
              
                numberStars.push(<i key={index} className="fa-xs fa-solid fa-star" ></i>)
              
            }
            for(let index=0; index< 5-rating; index++){
                
                  numberNones.push(<i key={index} className="fa-xs fa-solid fa-star features_host_rating_nones" ></i>)  
                  
            }

           setStars(numberStars)
           setNones(numberNones)
    }

    useEffect(() => {
      displayRatings()
    
      
      
    }, [rating])
    

    return (

        <div className='features'>
            <div className='features_kasa'>
                <h1>{title}</h1>
                <h3>{location}</h3>
                <ul className='features_kasa_tags'>
                    {tags.map((element, i) => {
                        return (
                            <li key={i}>{element}</li>
                        )
                    })}
                </ul>
            </div>
            <div className='features_host'>
                <div className='features_host_portrait'>
                <p>{host.name}</p>
                <img src={host.picture} alt="photo de l'hôte" />
                </div>
                
                <div className="features_host_rating">
                    {stars.map((element)=>{
                        return(element)
                    })}
                    {nones.map((element)=>{
                        return(element)
                    })
                    
                     
                    }
                </div>
            </div>
        </div>

    )


}

export default FeaturesComponent