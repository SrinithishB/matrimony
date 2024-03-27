import React from 'react'
import css from '../style/about.module.css'
import AboutusBanner from './AboutusBanner'
function Aboutus() {
  return (
    <main className={css.about}>
        <AboutusBanner page={"About Us"}/>
        <div className={css.AboutHeader}>
            <h1>About <span>Us</span></h1>
            <span className={css.divider}>
                <hr />
                <i className="fa-regular fa-square"></i>
                <hr />
            </span>
        </div>
        <div className={css.content}>
            <p>
            a1matrimony.in is a premier matrimonial services company in the state of Tamil Nadu, India. a1matrimony.in has grown in size and reach spreading out to every nook and corner of the state. touching the lives of thousands of people. Proud to be an organization backed by the latest technologies, a1matrimony.in has a reputation for providing high-quality matrimonial information services and excellent customer support. In keeping with worldwide developments in Information Technology, a1matrimony.in has established a unique data transfer system that enables its centers even in the remotest areas to provide matrimonial services in a fully networked environment.
            <br /><br />
            "Choose the right partner in our website"
            <br />
            <a href="https://a1matrimony.in/">https://a1matrimony.in/</a>

            </p>
        </div>
    </main>
  )
}

export default Aboutus