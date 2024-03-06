import React from 'react'
import NavBar from '../Components/NavBar'
import CryptoBody from '../Components/CryptoBody'
import CryptoTrending from '../Components/CryptoTrending'

function CryptoHome() {
  return (
    <>
      <NavBar />
      <div className=' justify-center mt-10 w-full md:flex '>
        <div className='mx-3 md:mx-0 md:w-[60%]'>
          <CryptoBody />
        </div>
        <div className='mx-3 md:mx-0 md:w-[30%]'>
          <CryptoTrending />
        </div>
      </div>
    </>
  )
}

export default CryptoHome