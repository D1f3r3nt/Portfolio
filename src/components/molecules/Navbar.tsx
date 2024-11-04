import {NavbarLink} from "../atoms/NavbarLink.tsx";

export const Navbar = () => {
    const email = 'santistebanmarc@gmail.com';
    const subject = "Portfolio's email";
    const body = 'Hi Marc, ';

    return (
        <header className='fixed top-0 z-10 bg-[#1e2737] mt-2 py-2 px-4 rounded-full flex gap-x-4 border-[#3b3e54] border-[1px]'>
            <NavbarLink href={'#working'}>Experience</NavbarLink>
            <NavbarLink href={'#projects'}>Projects</NavbarLink>
            <NavbarLink href={'#about'}>About me</NavbarLink>
            <NavbarLink href={`mailto:${email}?subject=${subject}&body=${body}`}>Contact</NavbarLink>
        </header>
    )
}