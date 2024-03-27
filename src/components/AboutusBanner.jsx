import React from 'react'
import css from '../style/about.module.css'
import { Link } from 'react-router-dom'
function AboutusBanner(props) {
  
  return (
    <section className={css.banner}>
        <div className={css.bannerContent}>
            <h1>{props.page}</h1>
            <div>
                <Link to="/"><i className="fa-solid fa-house"></i> Home Page </Link>
                <p> - {props.page}</p>
            </div>
        </div>
    </section>
  )
}

export default AboutusBanner