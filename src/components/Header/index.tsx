import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import useNav from "../../hooks/useNav";
import { Link } from "react-router-dom";
import NavbarToggler from "./NavbatToggler";
import Button from "../common/Button";
import Logo from "../../assets/images/logo.png";
import Flex from "../common/Flex";
import Image from "../common/Image";

const Navbar = () => {
  const navs = [
    { menu: "Services", scrollLink: "services", link: "" },
    { menu: "Clients", scrollLink: "", link: "" },
    { menu: "Testimonials", scrollLink: "testimonials", link: "" },
    { menu: "Blogs", scrollLink: "blogs", link: "/blogs" },
    { menu: "Case Studies", scrollLink: "", link: "" },
    { menu: "About Us", scrollLink: "", link: "/aboutus" },
  ];

  const [navbarOpen] = useNav(false);
  const location = useLocation();

  return (
    <>
      <nav id="header" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand pointer p-0">
            <Flex direction="row" justifyContent="start" alignItems="center">
              <Image src={Logo} cssClasses={["logo-img"]} />
              <p className="ms-2">DetaMarketing</p>
            </Flex>
          </Link>
          <button
            className="navbar-toggler border-0 outline-none p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <NavbarToggler navbarOpen={navbarOpen} />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
              {navs.map((nav, index) => (
                <li key={index} className="nav-item">
                  {location.pathname === "/" ? (
                    nav.scrollLink ? (
                      <ScrollLink
                        activeClass="active"
                        className="nav-link nav-animation-link white px-0 py-2 pointer"
                        to={nav.scrollLink}
                        spy={true}
                      >
                        {nav.menu}
                      </ScrollLink>
                    ) : (
                      <Link
                        className={`nav-link white px-0 py-2 pointer ${
                          location.pathname === nav.link && "active"
                        }`}
                        to={nav.link}
                      >
                        {nav.menu}
                      </Link>
                    )
                  ) : (
                    <Link
                      className={`nav-link white px-0 py-2 pointer ${
                        location.pathname === nav.link && "active"
                      }`}
                      to={nav.link}
                    >
                      {nav.menu}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Button text="Become NFT & Crypto Influencer" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
