import logo from "../assets/ERNEST.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="  flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-40 h-10 rounded-md" src={logo} alt="Logo" />
        
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
        
      </div>
    </nav>
  )
}

export default Navbar
