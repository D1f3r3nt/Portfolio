import {Button} from "../atoms/Button.tsx";

interface GoldSwitchProps {
    iconEnabled: string;
    iconDisabled: string;
    isEnabled: boolean;
    setIsEnabled: any;
}

export const GoldSwitch = ({ iconEnabled, iconDisabled, isEnabled, setIsEnabled }: GoldSwitchProps) => {

    return (
        <Button onClick={() => setIsEnabled(!isEnabled)} className={`xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] flex justify-center items-center ${isEnabled ? 'gold-gradient-button': 'bg-[#676767] rounded-[8px]'}`} >
            <img src={isEnabled ? iconEnabled : iconDisabled} alt={isEnabled ? 'Enabled' : 'Disabled'} />
        </Button>
    )
}