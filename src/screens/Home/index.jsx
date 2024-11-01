import React from 'react'
import BannerComponent from '../../components/banner'
import banner from '../../image/eric-murh.webp'
import KazasList from '../../components/KazasList'


const HomeScreen = () => {
  return (
    <main className='home'>
      <BannerComponent banner={banner} page={"home"}> <p>Chez vous,<br /> partout et ailleurs</p></BannerComponent>
      <KazasList />


    </main>
  )
}

export default HomeScreen