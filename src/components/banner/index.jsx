import React from 'react'
import '../../sass/components/banner.scss'



const BannerComponent = (props) => {
    
    const {banner,page,children} = props
    

    return (

        <div className={`banner ${page}`}>
           {children}
            {/** {text} */}
            <img src={banner} alt='banner' />
            
        </div>
    )
}

export default BannerComponent