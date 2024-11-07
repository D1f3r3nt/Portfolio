import {Language} from "./language.ts";
import {
    Android,
    Apple, CSS, Dart,
    Flutter,
    HTML5,
    Java,
    JavaScript, Kotlin,
    Nodejs,
    ReactIcon,
    Spring,
    Swift,
    TailwindCSS,
    TypeScript
} from "./icons.tsx";

export const getIcon = (language: Language) => {
    switch (language) {
        case Language.JavaScript:
            return <JavaScript/>;
        case Language.NodeJS:
            return <Nodejs/>;
        case Language.Flutter:
            return <Flutter/>;
        case Language.Jetpack:
            return <Android/>;
        case Language.Java:
            return <Java/>;
        case Language.React:
            return <ReactIcon/>;
        case Language.Swift:
            return <Swift/>;
        case Language.SwiftUI:
            return <Apple/>;
        case Language.SpringBoot:
            return <Spring/>;
        case Language.TypeScript:
            return <TypeScript/>;
        case Language.TailwindCSS:
            return <TailwindCSS />;
        case Language.HTML:
            return <HTML5 />;
        case Language.Kotlin:
            return <Kotlin/>;
        case Language.CSS:
            return <CSS/>;
        case Language.DART:
            return <Dart/>;
    }
}

export const getColors = (language: Language) => {
    switch (language) {
        case Language.JavaScript:
            return 'bg-yellow-600';
        case Language.NodeJS:
            return 'bg-green-700 bg-opacity-50';
        case Language.Flutter:
            return 'bg-blue-600 bg-opacity-50';
        case Language.Jetpack:
            return 'bg-green-700 bg-opacity-50';
        case Language.Java:
            return 'bg-white [&>span]:text-orange-500 bg-opacity-90';
        case Language.React:
            return 'bg-blue-500 bg-opacity-50';
        case Language.Swift:
            return 'bg-[#fd6c38] bg-opacity-50';
        case Language.SwiftUI:
            return 'bg-black';
        case Language.SpringBoot:
            return 'bg-green-800 bg-opacity-50';
        case Language.TypeScript:
            return 'bg-blue-400 bg-opacity-50';
        case Language.TailwindCSS:
            return 'bg-blue-300 bg-opacity-50';
        case Language.HTML:
            return 'bg-orange-500 bg-opacity-50';
        case Language.CSS:
            return 'bg-blue-300 bg-opacity-50';
        case Language.DART:
            return 'bg-blue-800 bg-opacity-50';
        case Language.Kotlin:
            return 'bg-[#9449f9] bg-opacity-50';
    }
}