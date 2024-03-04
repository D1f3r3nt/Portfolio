import {Button} from "../atoms/Button.tsx";

interface GoldButtonProps {
    onClick: () => void;
    children: any;
    className?: string;
}

export const GoldButton = ({onClick, children, className}: GoldButtonProps) => {

  return (
      <Button onClick={onClick} className={`sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] gold-gradient-button flex justify-center items-center ${className}`} >
          {children}
      </Button>
  )
}