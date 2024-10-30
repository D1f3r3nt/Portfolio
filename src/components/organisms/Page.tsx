import {Navbar} from "../molecules/Navbar.tsx";
import {ReactNode} from "react";

interface PageProps {
    children: ReactNode;
}

export const Page = ({children}: PageProps) => {
  return (
      <>
          <div className='w-full h-auto flex justify-center items-center background-gradient'>
              <Navbar />
              {children}
          </div>
      </>
  )
}