import {NavbarLink} from "../atoms/NavbarLink.tsx";
import {EMAIL, PRE_BODY, SUBJECT} from "../../utils/Constants.ts";

export const Navbar = () => {

    return (
        <header className='fixed top-0 z-10 bg-[#1e2737] mt-2 py-2 px-4 rounded-full flex gap-x-4 border-[#3b3e54] border-[1px]'>
            <NavbarLink href={'#working'}>Experience</NavbarLink>
            <NavbarLink href={'#projects'}>Projects</NavbarLink>
            <NavbarLink href={'#about'}>About me</NavbarLink>
            <NavbarLink href={`mailto:${EMAIL}?subject=${SUBJECT}&body=${PRE_BODY}`}>Contact</NavbarLink>
        </header>
    )
}