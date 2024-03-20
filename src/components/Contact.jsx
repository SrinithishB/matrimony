import React from 'react'
import css from "../style/home.module.css"
function Contact() {
  return (
    <section className={css.contact}>
        <div className={css.contact_content}>
            <div className={css.contact_phone}>
                <i className="fa fa-user"></i>
                <div>
                    <p>Call Us:</p>
                    <h2>+(91) 98942 34066</h2>
                </div>
            </div>
            <i className="fa fa-phone"></i>
            <div className={css.contact_body}>
                <h4>Professional and Dedicated Consulting Services</h4>
                <p>Our mission is to help our members find their life partners with ease and convenience, using our advanced technology and personalized services.</p>
            </div>
        <div>
            
        </div>
        </div>
        <a href='#' className={css.contact_button}>Contact Us <i className="fa fa-arrow-right"></i></a>
    </section>
  )
}

export default Contact