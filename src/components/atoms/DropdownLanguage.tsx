import flag from "../../assets/icons/flag.svg"
import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export const DropdownLanguage = () => {
    const [_, config] = useTranslation()
    const language = localStorage.getItem('lang') ?? 'en'

    useEffect(() => {
        config.changeLanguage(language)
    }, [])

    const handleChange = (language: string) => {
        // Cambiamos en el controlador
        config.changeLanguage(language)

        // Guardamos
        localStorage.setItem('lang', language)
    }

    return (
        <div className="flex flex-row gap-x-2 justify-center">
            <img src={flag} alt="Arrow Down"/>
            <select
                className="dropdown-style cursor-pointer"
                defaultValue={config.language}
                onChange={(event) => handleChange(event.target.value)}>
                <option value="es" > Español </option>
                <option value="en" > English </option>
            </select>
        </div>

    )
}