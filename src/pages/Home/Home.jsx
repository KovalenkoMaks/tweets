import { Link } from "react-router-dom"

import './style.scss'

const Home = () => {
    return (
        <section className="home">
            <h1 className="home__title">Welcome to your Tweet Box</h1>
            <Link className="home__link" to="/tweets">Tweets</Link>

        </section>)
}
export default Home