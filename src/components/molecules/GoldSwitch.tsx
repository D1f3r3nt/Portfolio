import {Button} from "../atoms/Button.tsx";

interface GoldSwitchProps {
    iconEnabled: string;
    iconDisabled: string;
    isEnabled: boolean;
    setIsEnabled: any;
}

export const GoldSwitch = ({ iconEnabled, iconDisabled, isEnabled, setIsEnabled }: GoldSwitchProps) => {

    return (
        <Button onClick={() => setIsEnabled(!isEnabled)} className={`w-[60px] h-[60px] flex justify-center items-center ${isEnabled ? 'gold-gradient-button': 'bg-[#676767] rounded-[8px]'}`} >
            <img src={isEnabled ? iconEnabled : iconDisabled} alt={isEnabled ? 'Enabled' : 'Disabled'} />
        </Button>
    )
}