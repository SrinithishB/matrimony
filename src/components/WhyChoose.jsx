import React from 'react'
import css from "../style/home.module.css"

function WhyChoose() {
  return (
    <section className={css.WhyChoose}>
        <div className={css.WhyChooseHeader}>
            <h1>Why Choose <span>VVK Matrimony</span></h1>
            <span className={css.divider}>
                <hr />
                <i className="fa-regular fa-square"></i>
                <hr />
            </span>
        </div>
        <div className={css.cardContainer}>
            <div className={css.card}>
            <i className="fa fa-camera"></i>
            <h3>Enhanced <br/> Profile</h3>
            <p>Photo protection option. Personal notes option to keep track of prospects. Personalized express interest. Show profile option. Preferred partner settings. Pre populated matching profiles.</p>
            </div>
            <div className={css.card}>
            <i className="fa fa-user"></i>
            <h3>Wide Profile Coverage</h3>
            <p>Easy registration steps - less than 10 minutes. Largest collection of profiles in Arya Vysya Community. Quick and advanced search option to shortlist your matching profile.</p>
            </div>
            <div className={css.card}>
            <i className="fa fa-headphones"></i>
            <h3>Happy <br />To Help</h3>
            <p>Matrimonial assistance thru customer support helpline +91 98942 34066 | email: vvkmatrimony12@gmail.com | WhatsApp at 98942 34066. We are here to help you to find your soulmate.</p>
            </div>
            <div className={css.card}>
            <i className="fa fa-institution"></i>
            <h3>Matrimony Dashboard</h3>
            <p>Real time dashboard of number of visitors, viewed profiles, shortlisted profiles, matching profile count, express interest sent/received pre populated matching profiles.</p>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose