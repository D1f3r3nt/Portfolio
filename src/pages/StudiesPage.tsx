import {Page} from "../components/organisms/Page.tsx";
import {Text} from "../components/atoms/Text.tsx";
import {CenterCard} from "../components/molecules/CenterCard.tsx";
import {useTranslation} from "react-i18next";

interface DegreeInterface {
    title: string;
    date: string;
    description: string;
}

export const StudiesPage = () => {

    const [t] = useTranslation("global")

    const degrees = t('studies.degree', { returnObjects: true }) as unknown as DegreeInterface[]

    return (
        <Page>
            <Text value={t('header.studies')} size={'xl'} gradient/>

            <div className='w-[100%] flex flex-col items-center gap-y-5'>
                {
                    degrees.reverse().map((degree, i) => {
                        return (
                            <>
                                <CenterCard title={degree.title} date={degree.date} description={degree.description} />
                                { i !== degrees.length - 1 &&
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