import {Button} from "./Button.tsx";
import {Text} from "./Text.tsx";
import {useTranslation} from "react-i18next";

export const DownButton = () => {
    const [t] = useTranslation("global")

    const scrollToCertificates = () => {
        const section = document.getElementById('courses');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Button onClick={scrollToCertificates} className="xl:h-[60px] h-[50px] gold-gradient-button flex justify-center items-center absolute top-5 right-5">
            <Text value={t('header.course')} size="m" gradient className="p-4"/>
        </Button>
    )
}