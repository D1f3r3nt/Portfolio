import {useState} from "react";
import {Language} from "../utils/language.ts";

export const useFilterLanguages = () => {
    const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([])

    const allLanguages = [
        Language.Java,
        Language.SpringBoot,
        Language.Kotlin,
        Language.Jetpack,
        Language.Swift,
        Language.SwiftUI,
        Language.Flutter,
        Language.JavaScript,
        Language.TypeScript,
        Language.React,
        Language.NodeJS,
        Language.TailwindCSS
    ]

    const toggleLanguage = (language: Language) => {
        let list = [...selectedLanguages];
        if (list.includes(language)) {
            list = selectedLanguages.filter(i => i !== language);
        } else {
            list.push(language);
        }
        setSelectedLanguages(list);
    }

    return {
        selectedLanguages,
        allLanguages,
        toggleLanguage,
    }
}