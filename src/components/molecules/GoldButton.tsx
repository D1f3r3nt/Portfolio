import {Button} from "../atoms/Button.tsx";

interface GoldButtonProps {
    onClick: () => void;
    children: any;
}

export const GoldButton = ({onClick, children}: GoldButtonProps) => {
  return (
      <Button onClick={onClick} className="w-[60px] h-[60px] bg-[#2E2E2E] gold-gradient-border-1" >
          {children}
      </Button>
  )
}