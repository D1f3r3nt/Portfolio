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
import {navigateOutside} from "../helpers/helper.ts";

export const HomePage = () => {

    const [global] = useTranslation("global")
    const [home] = useTranslation("home")

    const getCurrentYears = (): string => {
        const values = home('birthday').split('/')
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
            <div className='sm:grid sm:grid-cols-3 flex flex-col-reverse'>
                <div className='col-span-2'>
                    <Text value={global('header.home')} size='xl' gradient/>
                    <Text value={home('name')} size="l" className='mt-3'/>
                    <Text value={home('description')} size="m" className='mt-1 text-justify'/>
                </div>

                <div className="flex flex-col items-center mb-5">
                    <img src={profile} alt="Imagen" className="sm:w-[350px] sm:h-[350px] w-[250px] h-[250px] gold-gradient-image"/>

                    <div className="flex flex-row mt-8 max-w-[400px] w-[100%] justify-around">
                        <GoldButton onClick={() => navigateOutside(home('stackOverflowURL'))}>
                            <img src={stackOverflow} alt="Stack Overflow"/>
                        </GoldButton>
                        <GoldButton onClick={() => navigateOutside(home('linkedinURL'))}>
                            <img src={linkedIn} alt="LinkedIn"/>
                        </GoldButton>
                        <GoldButton onClick={() => navigateOutside(home('githubURL'))}>
                            <img src={github} alt="Github"/>
                        </GoldButton>
                        <GoldButton onClick={() => {
                            // TODO: Descargar PDF
                        }}>
                            <img src={download} alt="Download"/>
                        </GoldButton>
                    </div>

                    <div className="flex flex-col mt-10 max-w-[400px] w-[100%] gap-y-4">
                        <div className="flex flex-row gap-x-2">
                            <img src={calendar} alt="Stack Overflow"/>
                            <Text value={`${getCurrentYears()} años`} size="m"/>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={mapMarker} alt="Map Marker"/>
                            <Text value={home('location')} size="m"/>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={flag} alt="Languages"/>
                            <Text value={home('languages')} size="m"/>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={google} alt="Google"/>
                            <Text value={home('gmail')} size="m"/>
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={phone} alt="Phone Number"/>
                            <Text value={home('phone')} size="m"/>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}