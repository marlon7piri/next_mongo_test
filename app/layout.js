'use client'
import Navigation from './components/Navigation'
import '../styles/Global.css'
import Footer from './components/Footer'
import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect } from 'react'
import {Belleza} from 'next/font/google'

export const metadata = {
  title: 'Empresa Marlon y Antonio',
  description: 'El mejor servicio de catering en Panama',

}


export const akshar = Belleza({
  weight:["400"],
  style:["normal"],
  subsets:["latin-ext"]

})


export default function RootLayout ({ children }) {




   
  return (
    <html lang='en'>
      <header>
        <title>PanamaTrip App</title>
      </header> 
      <body className={akshar.className}>
        <Navigation />
        
        {children} 
        <Footer />
      </body>
    </html>
  )
}
