import css from "../style/home.module.css"
function Banner() {
  return (
    <section className={css.banner}>
        <div className={css.bannerContent}>
            <div>
            <h3>Trusted Matrimony & Matchmaking Service</h3>
            </div>
            <h1>Welcome to <span>VVK Matrimony</span></h1>
            <a href="">Login Your Profile <i className="fa fa-arrow-right"></i></a>
        </div>
    </section>
  )
}

export default Banner