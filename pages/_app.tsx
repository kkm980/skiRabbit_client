import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from 'react-redux';
import {store} from '../store'
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css'
export default function App({ Component, pageProps }: AppProps) {
  const [isFetching, setIsFetching]=useState(false);
  useEffect(()=>{
     console.log(isFetching,"isdfgh")
  },[isFetching])
  return <Provider store={store}>
    <div className='relative'>
      {isFetching?<div className='absolute z-25 top-0 text-[red]'>hkjhkkj</div>:<></>}
         
      <Component {...{ pageProps, setIsFetching }} />
      
      
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