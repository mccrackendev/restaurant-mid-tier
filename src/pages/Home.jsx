import { Fragment } from "react"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import { menuData } from "../data/data"



const Home = () => {
    return (
        <Fragment>
        <HeroSection />
        <Menu menuData={menuData} />
        </Fragment>
    )
}

export default Home;