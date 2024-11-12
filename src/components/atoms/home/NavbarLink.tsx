import {ReactNode} from "react";

interface NavbarLinkProps {
    href: string;
    children: ReactNode;
}

export const NavbarLink = ({
    href,
    children
} : NavbarLinkProps) => {
  return (
      <a className='transition text-gray-200 md:hover:text-blue-500 text-[14px]' href={href}>{children}</a>
  )
}