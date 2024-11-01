import React, { useState } from 'react'
import '../../sass/components/collapser.scss'


const CollapseComponent = ({ title, description, list }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className={`collapser ${isOpen && "collapser_open"}`}>

         <button onClick={() => setIsOpen(!isOpen)} className='collapse'><p>{title}</p> <i className={`fa-solid fa-angle-up ${isOpen && "collapse_open"}`}></i></button>
         {description ? <p className={isOpen ? "slider slider_open" : "slider slider_close"}>{description}</p> : ""}
         {list ?

            <ul className={isOpen ? "slider slider_open" : "slider slider_close"}>

               {list.map((element, i) => {
                  return (
                     <li key={i}>{element}</li>

                  )
               })}
            </ul> : ""}




      </div>
   )
}

export default CollapseComponent