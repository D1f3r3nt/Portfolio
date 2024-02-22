import {Page} from "../components/organisms/Page.tsx";
import {Text} from "../components/atoms/Text.tsx";
import {GoldButton} from "../components/molecules/GoldButton.tsx";

import linkedIn from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import download from "../assets/icons/download.svg";
import stackOverflow from "../assets/icons/stack-overflow.svg"
import calendar from "../assets/icons/calendar-alt.svg"
import mapMarker from "../assets/icons/map-marker-alt.svg"
import flag from "../assets/icons/flag.svg"
import google from "../assets/icons/google.svg"
import phone from "../assets/icons/phone-alt.svg"

import profile from "../assets/profilePhoto.jpg";
import {useTranslation} from "react-i18next";

export const HomePage = () => {

    const [t] = useTranslation("global")

    const getCurrentYears = (): string => {
        const values = t('home.birthday').split('/')
        const initialDate = new Date(Number(values[2]), Number(values[1]), Number(values[0]))
        const currentDate = new Date()

        const anioInicial = initialDate.getFullYear();
        const anioFinal = currentDate.getFullYear();

        const diferenciaAnios = anioFinal - anioInicial;

        if (currentDate < new Date(anioFinal, initialDate.getMonth(), initialDate.getDate())) {
            return `${diferenciaAnios - 1}`;
        } else {
            return `${diferenciaAnios}`;
        }
    }

    return (
        <Page>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <Text value='¿Quién soy?' size='xl' gradient/>
                    <Text value={t('home.name')} size="l" className='mt-3'/>
                    <Text value={t('home.description')} size="m" className='mt-1 text-justify'/>
                </div>

                <div className="flex flex-col items-center">
                    <img src={profile} alt="Imagen" className="w-[350px] h-[350px] gold-gradient-image"/>

                    <div className="flex flex-row mt-8 w-[400px] justify-around">
                        <GoldButton onClick={() => window.open(t('home.stackOverflowURL'), '_blank')}>
                            <img src={stackOverflow} alt="Stack Overflow"/>
                        </GoldButton>
                        <GoldButton onClick={() => window.open(t('home.linkedinURL'), '_blank')}>
                            <img src={linkedIn} alt="LinkedIn"/>
                        </GoldButton>
                        <GoldButton onClick={() => window.open(t('home.githubURL'), '_blank')}>
                            <img src={github} alt="Github"/>
                        </GoldButton>
                        <GoldButton onClick={() => {
                        }}>
                            <img src={download} alt="Github"/>
                        </GoldButton>
                    </div>

                    <div className="flex flex-col mt-10 w-[400px] gap-y-4">
                        <div className="flex flex-row gap-x-2">
                            <img src={calendar} alt="Stack Overflow"/>
                            <Text value={`${getCurrentYears()} años`} size="m"/>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={mapMarker} alt="Map Marker"/>
                            <Text value={t('home.location')} size="m"/>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={flag} alt="Languages"/>
                            <Text value={t('home.languages')} size="m"/>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={google} alt="Google"/>
                            <Text value={t('home.gmail')} size="m"/>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={phone} alt="Phone Number"/>
                            <Text value={t('home.phone')} size="m"/>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}