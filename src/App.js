import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import placeholder from "../assests/brooke-lark-HlNcigvUi4Q-unsplash.jpg";
import gallery1 from "../assests/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg";
import gallery2 from "../assests/brooke-lark-HlNcigvUi4Q-unsplash.jpg";
import gallery3 from "../assests/lily-banse--YHSwy6uqvk-unsplash.jpg";

export const menuData = [
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
      {
        name: "burgers",
        image: placeholder,
        alt: "burgers",
        description: "A burger with fries on a bed of kale or something",
        price: "$15.99",
      },
      {
        name: "burgers",
        image: placeholder,
        alt: "burgers",
        description: "A burger with fries on a bed of kale or something",
        price: "$15.99",
      },
      {
        name: "burgers",
        image: placeholder,
        alt: "burgers",
        description: "A burger with fries on a bed of kale or something",
        price: "$15.99",
      },
      {
        name: "burgers",
        image: placeholder,
        alt: "burgers",
        description: "A burger with fries on a bed of kale or something",
        price: "$15.99",
      },
      {
        name: "burgers",
        image: placeholder,
        alt: "burgers",
        description: "A burger with fries on a bed of kale or something",
        price: "$15.99",
      },
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
      {
        name: "A chicken",
        image: placeholder,
        alt: "a chicken on a bed of something",
        description: "a chicken roasted with vegetables and hollandaise",
        price: "$20.00",
      },
      {
        name: "A chicken",
        image: placeholder,
        alt: "a chicken on a bed of something",
        description: "a chicken roasted with vegetables and hollandaise",
        price: "$20.00",
      },
      {
        name: "A chicken",
        image: placeholder,
        alt: "a chicken on a bed of something",
        description: "a chicken roasted with vegetables and hollandaise",
        price: "$20.00",
      },
      {
        name: "A chicken",
        image: placeholder,
        alt: "a chicken on a bed of something",
        description: "a chicken roasted with vegetables and hollandaise",
        price: "$20.00",
      },
      {
        name: "A chicken",
        image: placeholder,
        alt: "a chicken on a bed of something",
        description: "a chicken roasted with vegetables and hollandaise",
        price: "$20.00",
      },
      {
        name: "A chicken",
        image: placeholder,
        alt: "a chicken on a bed of something",
        description: "a chicken roasted with vegetables and hollandaise",
        price: "$20.00",
      },
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

export const galleryImages = [
  {
    src: gallery1,
    alt: "gallery image 1",
  },
  {
    src: gallery2,
    alt: "gallery image 2",
  },
  {
    src: gallery3,
    alt: "gallery image 3",
  },
  {
    src: gallery1,
    alt: "gallery image 1",
  },
  {
    src: gallery2,
    alt: "gallery image 2",
  },
  {
    src: gallery3,
    alt: "gallery image 3",
  },
  {
    src: gallery1,
    alt: "gallery image 1",
  },
  {
    src: gallery2,
    alt: "gallery image 2",
  },
  {
    src: gallery3,
    alt: "gallery image 3",
  },
  {
    src: gallery1,
    alt: "gallery image 1",
  },
  {
    src: gallery2,
    alt: "gallery image 2",
  },
  {
    src: gallery3,
    alt: "gallery image 3",
  },
  {
    src: gallery1,
    alt: "gallery image 1",
  },
  {
    src: gallery2,
    alt: "gallery image 2",
  },
  {
    src: gallery3,
    alt: "gallery image 3",
  },
  {
    src: gallery3,
    alt: "gallery image 3",
  },
];

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
