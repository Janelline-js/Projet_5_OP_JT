import React, { useState, useEffect, prevState } from 'react'
import '../../sass/components/carousel.scss'


const SlideShowComponent = (props) => {

  const { pictures } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(pictures.length)

  useEffect(() => {

    setLength(pictures.length)


  }, [pictures])

  console.log(length)


  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    } else {
      setCurrentIndex(prevState => prevState = 0)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    } else {
      setCurrentIndex(prevState => prevState + length - 1)
    }
  }


  return (
    <div className='carousel'>
      {pictures.length > 1 ?
        <div className='carousel_btn'>
          <button onClick={() => { prev() }} className='carousel_btn_prev'><i className='fa-solid fa-angle-up'></i></button>
          <button onClick={() => { next() }} className='carousel_btn_next'><i className='fa-solid fa-angle-up'></i></button>
        </div> : " "}

      <div id='slider' className='carousel_img' style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
        {pictures.map((element,i) => {
          return (
            <img key={i} src={
              element} alt="photo du logement" />
          )
        })}

      </div>




    </div>
  )
}

export default SlideShowComponent