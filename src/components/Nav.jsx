import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import css from '../style/nav.module.css'
function Nav() {
  return (
    <header>
        <nav className={css.navbar}>
            <a href=""><img className={css.logo} src={logo} alt="" srcSet="" /></a>
            <div className={css.menu}>
                <Link to="/">Home</Link>
                <Link to="">Matches</Link>
                <Link to="">Membership Plans</Link>
                <Link to="">Search</Link>
                <Link to="/about">About us</Link>
                <Link to="">Login</Link>
            </div>
            <div className={css.menubar}>
                <a href=""><i className="fa-solid fa-bars"></i></a>
            </div>
        </nav>
    </header>
  )
}

export default Nav