import {Navbar} from "../molecules/Navbar.tsx";
import {ReactNode} from "react";

interface PageProps {
    showNavbar?: boolean;
    children: ReactNode;
}

export const Page = ({children, showNavbar = true}: PageProps) => {
    return (
        <>
            <div className='w-full h-auto flex flex-col justify-center items-center background-gradient'>
                {
                    showNavbar &&
                    <Navbar/>
                }
                <div className={
                    `w-full lg:max-w-4xl md:max-w-2xl 
                    ${showNavbar ? 'md:py-[150px]' : 'md:py-[100px]'} 
                    flex flex-col gap-y-16 py-10 px-4`
                }>
                    {children}
                </div>
                <footer className='w-full lg:max-w-4xl md:max-w-2xl text-[#e4e4e7e6] text-[14px] flex justify-end mb-5 px-4'>
                    © 2024 msantisteban. Casi todos los derechos reservados
                </footer>
            </div>
        </>
    )
}