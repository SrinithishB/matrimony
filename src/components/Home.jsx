import React from 'react'
import Banner from './Banner'
import WhyChoose from './WhyChoose'
import css from '../style/home.module.css'
import Contact from './Contact'

function Home() {
  return (
    <main className={css.home}>
        <Banner/>
        <WhyChoose/>
        <Contact/>
    </main>
  )
}

export default Home