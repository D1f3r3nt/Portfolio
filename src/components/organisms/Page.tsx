import {Navbar} from "../molecules/Navbar.tsx";
import {ReactNode} from "react";

interface PageProps {
    children: ReactNode;
}

export const Page = ({children}: PageProps) => {
  return (
      <>
          <div className='w-full h-auto flex flex-col justify-center items-center background-gradient'>
              <Navbar />
              {children}
              <footer className='w-full lg:max-w-4xl md:max-w-2xl text-[#e4e4e7e6] text-[14px] flex justify-end mb-5'>
                  © 2024 msantisteban. Casi todos los derechos reservados
              </footer>
          </div>
      </>
  )
}