import {Page} from "../components/organisms/Page.tsx";
import {Text} from "../components/atoms/Text.tsx";
import {useTranslation} from "react-i18next";
import {CenterCard} from "../components/molecules/CenterCard.tsx";

interface ExperienceInterface {
    title: string;
    date: string;
    description: string;
}

export const ExperiencePage = () => {
    const [global] = useTranslation("global")
    const [experience] = useTranslation("experience")

    const experiences = experience('data', { returnObjects: true }) as unknown as ExperienceInterface[]

    return (
        <Page>
            <Text value={global('header.experience')} size={'xl'} gradient className='sm:block hidden'/>

            <div className='w-[100%] flex flex-col items-center gap-y-5'>
                {
                    experiences.reverse().map((degree, i) => {
                        return (
                            <>
                                <CenterCard title={degree.title} date={degree.date} description={degree.description} />
                                { i !== experiences.length - 1 &&
                                    <hr className='max-w-[850px] line-gradient'/>
                                }
                            </>
                        )
                    })
                }
            </div>
        </Page>
    )
}