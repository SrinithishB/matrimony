import logo from '../images/logo.png'
import css from '../style/nav.module.css'
function Nav() {
  return (
    <header>
        <nav className={css.navbar}>
            <a href=""><img className={css.logo} src={logo} alt="" srcSet="" /></a>
            <div className={css.menu}>
                <a href="">Home</a>
                <a href="">Matches</a>
                <a href="">Membership Plans</a>
                <a href="">Search</a>
                <a href="">About us</a>
                <a href="">Login</a>
            </div>
            <div className={css.menubar}>
                <a href=""><i className="fa-solid fa-bars"></i></a>
            </div>
        </nav>
    </header>
  )
}

export default Nav