import {Navbar} from "../molecules/Navbar.tsx";

interface PageProps {
    children: any;
}

export const Page = ({children}: PageProps) => {
  return (
      <>
          <Navbar />
          <div className="p-6 mt-14 lg:mt-0 lg:ml-64">
              {children}
          </div>
      </>
  )
}