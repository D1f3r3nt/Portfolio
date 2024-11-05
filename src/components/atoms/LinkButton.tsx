import {ReactNode} from "react";

interface LinkButtonProps {
    href: string;
    className?: string;
    children: ReactNode;
}

export const LinkButton = ({
    href,
    children,
    className
}: LinkButtonProps) => {
  return (
      <a
          className={`p-2 bg-[#1e2737] rounded border-[1px] border-[#3b3e54] hover:cursor-pointer ${className}`}
          href={href}
          target="_blank"
          rel="noopener"
      >
          {children}
      </a>
  )
}