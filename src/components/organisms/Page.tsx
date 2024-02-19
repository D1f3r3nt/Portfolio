import {Navbar} from "../molecules/Navbar.tsx";

interface PageProps {
    children: any;
}

export const Page = ({children}: PageProps) => {
  return (
      <>
          <Navbar />
          <div className="p-6 mt-14 sm:mt-0 sm:ml-64">
              {children}
          </div>
      </>
  )
}