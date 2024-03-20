import React from 'react'
import css from '../style/footer.module.css'
function Footer() {
  return (
    <footer className={css.footer}>
        <div className={css.menu}>
            <a href="#">About Us</a>
            <hr />
            <a href="#">Terms & Conditions</a>
            <hr />
            <a href="#">Privacy Policy</a>
            <hr />
            <a href="#">Refund Policy</a>
        </div>
        <p>© 2024 <a href="#">SCA Marriage.</a> All rights Reserved</p>
    </footer>
  )
}

export default Footer