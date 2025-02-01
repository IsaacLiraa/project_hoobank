import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"
import { useState } from "react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="flex py-6 justify-between items-center navbar">
        <img src={logo} alt="logo" className="w-[126px]" />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-white">
            {navLinks.map((link, index) => (
                <li key={link.id} className={`font-[poppins] font-normal cursor-pointer text-[16px] ${index !== link.id.length - 1 ? 'mr-10' : 'mr-0'}`}><a href={`#${link.id}`}>{link.title}</a></li>
            ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={`${toggle ? close : menu}`} onClick={() => setToggle((prev) => (!prev))} alt="menu" />
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
                <ul className="list-none flex justify-end items-start flex-1 flex-col text-white">
                    {navLinks.map((link, index) => (
                    <li key={link.id} className={`font-[poppins] font-normal cursor-pointer text-[16px] ${index !== navLinks.length - 1 ? 'mb-4' : 'mb-0'}`}><a href={`#${link.id}`}>{link.title}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
