import {NavbarLink} from "../atoms/NavbarLink.tsx";

export const Navbar = () => {
    return (
        <header className='fixed top-0 z-10 bg-[#1e2737] mt-2 py-2 px-4 rounded-full flex gap-x-4 border-[#3b3e54] border-[1px]'>
            <NavbarLink href={'#'}>Experience</NavbarLink>
            <NavbarLink href={'#'}>Projects</NavbarLink>
            <NavbarLink href={'#'}>About me</NavbarLink>
            <NavbarLink href={'#'}>Contact</NavbarLink>
        </header>
    )
}