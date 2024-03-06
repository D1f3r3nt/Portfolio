import {Button} from "../atoms/Button.tsx";

interface GoldButtonProps {
    onClick: () => void;
    children: any;
    className?: string;
}

export const GoldButton = ({onClick, children, className}: GoldButtonProps) => {

  return (
      <Button onClick={onClick} className={`xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] gold-gradient-button flex justify-center items-center ${className}`} >
          {children}
      </Button>
  )
}