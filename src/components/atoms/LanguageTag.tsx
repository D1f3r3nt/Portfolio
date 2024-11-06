import {Android, Apple, Flutter, Java, JavaScript, Kotlin, Nodejs, ReactIcon, Spring, Swift, TailwindCSS, TypeScript} from "../../utils/Icons.tsx";
import {Language} from "../../utils/Language.ts";

interface LanguageTagProps {
    language: Language
}

export const LanguageTag = ({
    language
} : LanguageTagProps) => {

    const getColors = (language: Language) => {
        switch (language) {
            case Language.JavaScript: return 'bg-yellow-600';
            case Language.NodeJS: return 'bg-green-700 bg-opacity-50';
            case Language.Flutter: return 'bg-blue-600 bg-opacity-50';
            case Language.Jetpack: return 'bg-green-700 bg-opacity-50';
            case Language.Java: return 'bg-white [&>span]:text-orange-500 bg-opacity-90';
            case Language.React: return 'bg-blue-500 bg-opacity-50';
            case Language.Swift: return 'bg-[#fd6c38] bg-opacity-50';
            case Language.SwiftUI: return 'bg-black';
            case Language.SpringBoot: return 'bg-green-800 bg-opacity-50';
            case Language.TypeScript: return 'bg-blue-400 bg-opacity-50';
            case Language.TailwindCSS: return 'bg-blue-300 bg-opacity-50';
            case Language.Kotlin: return 'bg-[#9449f9] bg-opacity-50';
        }
    }

    const getIcon = (language: Language) => {
        switch (language) {
            case Language.JavaScript: return <JavaScript />;
            case Language.NodeJS: return <Nodejs />;
            case Language.Flutter: return <Flutter />;
            case Language.Jetpack: return <Android />;
            case Language.Java: return <Java />;
            case Language.React: return <ReactIcon />;
            case Language.Swift: return <Swift />;
            case Language.SwiftUI: return <Apple />;
            case Language.SpringBoot: return <Spring />;
            case Language.TypeScript: return <TypeScript />;
            case Language.TailwindCSS: return <TailwindCSS />;
            case Language.Kotlin: return <Kotlin />;
        }
    }

    return (
        <div className={`flex justify-center items-center w-min rounded-full py-1 px-2 ${getColors(language)}`}>
            {getIcon(language)} <span className='ml-2 text-[12px]'>{language}</span>
        </div>
    )
}