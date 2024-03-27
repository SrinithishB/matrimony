import React from 'react'
import css from '../style/footer.module.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <footer className={css.footer}>
        <div className={css.menu}>
            <Link to="/about">About Us</Link>
            <hr />
            <Link to="/terms">Terms & Conditions</Link>
            <hr />
            <Link to="/privacy">Privacy Policy</Link>
            <hr />
            <Link to="/refundpolicy">Refund Policy</Link>
        </div>
        <p>© 2024 <a href="#">SCA Marriage.</a> All rights Reserved</p>
    </footer>
  )
}

export default Footer