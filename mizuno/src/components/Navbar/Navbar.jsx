import NavbarMenu from "./definitions";
import Logo from "../../assets/Balbino.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag, MdMenu } from "react-icons/md";
import "../Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>

        <ul className="navbar-menu">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="navbar-item">
              <a href={item.link} className="navbar-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-icons">
          <div className="icon user-icon">
            <FaRegUserCircle />
          </div>

          <div className="cart-icon">
            <MdOutlineShoppingBag />
            <div className="cart-count">2</div>
          </div>

          <div className="mobile-menu">
            <MdMenu className="hamburger-icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;