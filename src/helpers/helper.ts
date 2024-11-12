import {Language} from "../utils/language.ts";

export const navigateOutside = (url: string) => {
    window.open(url, '_blank')
}

export const getLanguageFromTopic = (topic: string): Language => {

    switch (topic) {
        case "typescript": return Language.TypeScript;
        case "javascript": return Language.JavaScript;
        case "tailwind": return Language.TailwindCSS;
        case "java": return Language.Java;
        case "kotlin": return Language.Kotlin;
        case "spring-boot": return Language.SpringBoot;
        case "jetpack-compose": return Language.Jetpack;
        case "swift": return Language.Swift;
        case "swiftui": return Language.SwiftUI;
        case "flutter": return Language.Flutter;
        case "react": return Language.React;
        case "node": return Language.NodeJS;
        case "html": return Language.HTML;
        case "css": return Language.CSS;
        case "dart": return Language.Dart;
        default: return Language.HTML;
    }
}