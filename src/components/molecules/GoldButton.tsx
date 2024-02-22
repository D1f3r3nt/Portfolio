import {Button} from "../atoms/Button.tsx";

interface GoldButtonProps {
    onClick: () => void;
    children: any;
    className?: string;
}

export const GoldButton = ({onClick, children, className}: GoldButtonProps) => {

  return (
      <Button onClick={onClick} className={`w-[60px] h-[60px] gold-gradient-button flex justify-center items-center ${className}`} >
          {children}
      </Button>
  )
}