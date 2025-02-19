import logo from "../assets/anupam-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar mb-20 flex items-center justify-between ">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-24 h-12" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4  ">
        <a href="https://www.linkedin.com/in/anupam-boral/">
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/anupamboral">
          <FaGithub size={25} />
        </a>
        <a href="https://x.com/AnupamBoral399">
          <BsTwitterX size={25} />
        </a>
        <a href="https://www.instagram.com/anupamboral/">
          <FaInstagram size={25} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
