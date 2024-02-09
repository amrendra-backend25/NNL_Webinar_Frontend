import "./Navbar.css";
import { BsEnvelope } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
// import { TbGridDots } from "react-icons/tb";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const isHome = window.location.pathname === "/";

  console.log("pathname", isHome, window.location.pathname);

  const handleClick = () => setClick(!click);

  const handleScroll = () => {
    // Set isScrolled based on the scroll position
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`header_section ${isScrolled ? "scrolled" : ""} ${
          !isHome && "headerStatic"
        }`}
      >
        <div className="container">
          <div className="header_parent">
            <div className="header_img">
              <Link to="/">
                <img
                  src={
                    isScrolled || !isHome
                      ? "/images/Banner/NNL Logo-01.png"
                      : "/images/Banner/NNL LOGO_White-01.png"
                  }
                  alt=""
                />
              </Link>
            </div>
            <div className={click ? "header_right active" : "header_right"}>
              <a href="">
                <BsEnvelope />
                <span>feedback@nursingnextlive.com</span>
              </a>
              <a href="">
                <IoCallOutline />
                <span>Toll-Free: +91 9999117411</span>
              </a>
              {/* <a href=""><TbGridDots /><span>Businesses</span></a> */}
            </div>
            <div className="hamburger" onClick={handleClick}>
              {
                // click ? (
                // <FaTimes size={20} style={{color:"#fff"}} />
                // ) : (
                // <FaBars  size={20} style={{color:"#fff"}} />
                // )
                click ? (
                  <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                  <FaBars
                    className={isScrolled ? "bar_active active" : "bar_active"}
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
