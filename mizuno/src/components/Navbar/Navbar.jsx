import NavbarMenu from "./definitions";
import Logo from "../../assets/Balbino.png";
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
                        <li key={item.id} className="navba-item">
                            <a href={item.link} className="navba-link">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;