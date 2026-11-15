import { useState } from "react";
import { NavLink, Link } from "react-router";
import Logo from "../assets/PitstopLogo.png";
import { Sling as Hamburger } from "hamburger-react";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={Logo} alt="Pitstop Logo" />
          </Link>
        </div>

        <div className="nav-link-desktop">
          <div className="nav-links">
            <NavLink
              to="/"
              end
              className="nav-link click-effect"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="nav-link click-effect"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link click-effect"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/book-appointment"
              className="nav-link-button click-effect"
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </NavLink>
          </div>
        </div>

        <div className="nav-link-mobile">
          <div className="hamburger-container">
            <Hamburger
              color="#18272e"
              toggled={menuOpen}
              toggle={setMenuOpen}
            />
          </div>
          {menuOpen && (
            <div className="menu-overlay" onClick={() => setMenuOpen(false)} />
          )}
          <div className={`off-screen-container ${menuOpen ? "open" : ""}`}>
            <div className="nav-links">
              <NavLink
                to="/"
                end
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                <FaHome className="nav-icon" />
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                <FaTools className="nav-icon" />
                Services
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                <FaInfoCircle className="nav-icon" />
                About
              </NavLink>
              <NavLink
                to="/book-appointment"
                className="nav-link click-effect"
                onClick={() => setMenuOpen(false)}
              >
                <RiCalendarScheduleFill className="nav-icon" />
                Book Appointment
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
