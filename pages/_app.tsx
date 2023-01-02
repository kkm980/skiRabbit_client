import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import {store} from '../store'
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'

import LoaderScreen from '../components/general/loaderScreen';
import NavBar from '../components/general/NavBar';

export default function App({ Component, pageProps }: AppProps) {

  const [isFetching, setIsFetching]=useState(false);

  useEffect(()=>{
     console.log(isFetching,"isdfgh")
  },[isFetching])

  return <Provider store={store}>
    <div className='h-screen font-inter flex flex-col overflow-x-hidden overflow-y-auto hide-scrollbar'>
      
      {isFetching?<LoaderScreen/>:<></>}

      <NavBar/>
      <div className=' mt-[80px]'>
        <Component {...{ pageProps, setIsFetching }} />
      </div>
      

    </div>

  </Provider>
}



// import React from 'react'
// import App from 'next/app'
// import {Provider} from './Context';

// class MyApp extends App {
//   render({props) {
//     const { Component, pageProps } = props
//     return <Provider><Component {...pageProps} /></Provider>
//   }
// }

// export default MyApp