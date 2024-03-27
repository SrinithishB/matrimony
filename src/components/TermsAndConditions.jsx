import React from 'react'
import css from "../style/about.module.css"
import AboutusBanner from './AboutusBanner'
function TermsAndConditions() {
  return (
    <main className={css.termsAndConditions}>
        <AboutusBanner page={"Terms and Conditions"}/>
        <div className={css.Header}>
            <h1>Terms and <span>Conditions</span></h1>
            <span className={css.divider}>
                <hr />
                <i className="fa-regular fa-square"></i>
                <hr />
            </span>
        </div>
        <div className={css.content}>
            <h2>Terms of use</h2>
            <p>
            a1matrimony.in reserves the right to modify or make any alterations to any matrimonial listing. This may normally be done where prima facie errors or apparent contradictions are noticed, or else to conform, and be conducive, to the Search and Browse criteria/features of the site, and or in order to optimize response to the listings.
            <br /><br />
            a1matrimony.in reserves the right to contact, send emails/mails, etc., to the contact details - address, telephone, email ids - specified in the matrimonial listings, which could be in the nature of clarifications (seeking or making), queries (raising or addressing), updating, modifications, deletions, as well as to provide information on any of the existing or new or proposed site features, as also in respect of any promotional offers that it may wish to offer on its own or in concert with others or for and on behalf of others or otherwise, as it may deem fit at its sole discretion.
            <br /><br />
            a1matrimony.in reserves the right to use the information comprised in the matrimonial listings in any of its matrimony-related current features and/or services and any of its matrimony-related future or proposed features and/or services as it may introduce from time to time. It may be noted that most of these features and services are aimed at maximizing response to, for, and from the matrimonial listings, whether directly or indirectly.
            <br /><br />
            a1matrimony.in does not guarantee the accuracy of data provided by the candidate in the database. You are requested to verify all information directly and proceed.
            <br /><br />
            The minimum age for registering is 18 for women and 21 for men.
            <br /><br />
            If you use this site, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            <br /><br />
            Your membership will automatically be suspended if you send abusive, obscene, or sexually oriented messages to other members.
            <br /><br />
            If you choose to terminate your membership, the membership FEES ARE NOT REFUNDABLE under any circumstances.

            </p>
        </div>
    </main>
  )
}

export default TermsAndConditions