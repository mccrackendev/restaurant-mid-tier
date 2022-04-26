import logo from "../assests/logo.png";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="company logo" height={100} width={100}></img>
        <h1>Restaurant Mid-tier</h1>
      </div>
      <Dropdown />
    </header>
  );
};

export default Header;
