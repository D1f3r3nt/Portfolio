import {Language} from "../../utils/language.ts";
import {getColors, getIcon} from "../../utils/languageHelper.tsx";

interface LanguageTagProps {
    language: Language
    clickable?: boolean;
    clicked?: boolean;
    setClicked?: () => void;
}

export const LanguageTag = ({
                                language,
                                clickable = false,
                                clicked = false,
                                setClicked = () => {
                                },
                            }: LanguageTagProps) => {

    return (
        <div
            className={`flex justify-center items-center 
            w-min rounded-full py-1 px-2
            ${clickable ? 'md:hover:cursor-pointer' : ''}
            ${clickable && !clicked ? 'bg-gray-600' : getColors(language)}`}
            onClick={setClicked}
        >
            {getIcon(language)} <span className='ml-2 text-[12px]'>{language}</span>
        </div>
    )
}