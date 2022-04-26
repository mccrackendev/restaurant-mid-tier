import { Fragment } from "react"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import placeholder from "../assests/brooke-lark-HlNcigvUi4Q-unsplash.jpg";

const menuData = [
    {
      title: "appetizers",
      items: [
        {
          name: "burgers",
          image: placeholder,
          alt: "burgers",
          description: "A burger with fries on a bed of kale or something",
          price: "$15.99",
        },
      ],
    },
    {
      title: "entrees",
      items: [
        {
          name: "A chicken",
          image: placeholder,
          alt: "a chicken on a bed of something",
          description: "a chicken roasted with vegetables and hollandaise",
          price: "$20.00",
        },
      ],
    },
  ];


const Home = () => {
    return (
        <Fragment>
        <HeroSection />
        <Menu menuData={menuData} />
        </Fragment>
    )
}

export default Home;