import {Page} from "../components/organisms/Page.tsx";
import {Text} from "../components/atoms/Text.tsx";
import {CenterCard} from "../components/molecules/CenterCard.tsx";
import {useTranslation} from "react-i18next";
import {ImageCard} from "../components/molecules/ImageCard.tsx";
import {DownButton} from "../components/atoms/DownButton.tsx";

interface DegreeInterface {
    title: string;
    date: string;
    description: string;
}

interface CoursesInterface {
    title: string;
    date: string;
    description: string;
    image: string;
}

export const StudiesPage = () => {

    const [t] = useTranslation("global")

    const degrees = t('studies.degree', {returnObjects: true}) as unknown as DegreeInterface[]
    const courses = t('studies.course', {returnObjects: true}) as unknown as CoursesInterface[]

    return (
        <Page>

            <DownButton />

            <Text value={t('header.studies')} size={'xl'} gradient className='sm:block hidden'/>

            <div className='w-[100%] flex flex-col items-center gap-y-5 mt-5'>
                {
                    degrees.reverse().map((degree, i) => {
                        return (
                            <>
                                <CenterCard title={degree.title} date={degree.date} description={degree.description}/>
                                {i !== degrees.length - 1 &&
                                    <hr className='max-w-[850px] line-gradient'/>
                                }
                            </>
                        )
                    })
                }
            </div>

            <Text id="courses" value={t('header.course')} size={'xl'} gradient className={'mt-10'}/>

            <div className='w-[100%] flex flex-col items-center gap-y-16 mt-10'>
                {
                    courses.reverse().map((course, i) => {
                        return (
                            <ImageCard title={course.title} date={course.date} description={course.description} image={course.image} imageFirst={i % 2 == 0}/>
                        )
                    })
                }
            </div>
        </Page>
    )
}