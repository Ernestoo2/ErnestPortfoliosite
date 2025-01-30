import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='  flex items-center justify-between py-2'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='font-brush text-5xl'>Ernest</h1>
      </div>
      <div  className='flex items-center justify-center gap-4 text-2xl'>
        <FaGithub />
        <FaLinkedin />
        {/* <Link to="https://www.linkedin.com/in/ernestoo2/"></Link>
        <Link to={"http://github.com/Ernestoo2"}></Link> */}
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  )
}

export default Navbar
