import React from 'react'
import css from "../style/about.module.css"
import AboutusBanner from './AboutusBanner'

function PrivacyPolicy() {
  return (
    <main className={css.privacyPolicy}>
        <AboutusBanner page={"Privacy Policy"}/>
        <div className={css.Header}>
            <h1>Privacy <span>Policy</span></h1>
            <span className={css.divider}>
                <hr />
                <i className="fa-regular fa-square"></i>
                <hr />
            </span>
        </div>
        <div className={css.content}>
            <h2>Information Sharing and Disclosure</h2>
            <p>We will not sell or rent your personally identifiable information to anyone. We will send personally identifiable information about you to other companies or people only when: We have your consent to share the information; We need to share your information to provide the product or service you have requested; We need to send the information to companies who work on behalf of us to provide a product or service to you. (Unless we tell you differently, these companies do not have any right to use the personally identifiable information we provide to them beyond what is necessary to assist us.); We respond to court orders or legal process, or We find that your actions on our websites violate any of our usage guidelines for specific products or services.</p>
            <br />
            <h2>Use of IP Addresses</h2>
            <p>An Internet protocol (I.P.) address is a set of numbers that is automatically assigned to your computer whenever you log on to your internet service provider or through your company's local area network (LAN) or wide area network (WAN). Web servers, the powerful computers that provide web pages for viewing, automatically identify your computer by the IP address assigned to it during your session online. We may collect I.P. addresses for some purposes (for example, to report anonymous user information to our advertisers and to audit the use of our site). We do not ordinarily link a user's I.P. address to a person's personal information, which means we will have a record of each user's session but the user remains anonymous to us. We will use I.P. addresses to identify users of our site when we feel it is necessary to enforce compliance with our site's terms of use or to protect our service, site, or other users.</p>
            <br />
            <h2>Security</h2>
            <p>We have security measures in place to attempt to protect against the loss, misuse, and alteration of your user data under our control. Only certain employees have access to the information you provide us. For example, we impose strict rules on our employees who have access either to the databases that store user information or to the servers that host our services. While we cannot guarantee that loss, misuse, or alteration to data will not occur, we try to prevent such unfortunate occurrences.</p>
            <br />
            <h2>Changes to this Privacy Policy</h2>
            <p>We may amend this policy from time to time. If we make any substantial changes in the way we use your personal information we will notify you by posting a prominent announcement on our pages.
            <br />
            If you have questions about this privacy policy or the practices of this site, please contact us.
            <br />
            "Choose the right partner in our website"
</p>
        </div>
    </main>
  )
}

export default PrivacyPolicy