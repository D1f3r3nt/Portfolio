import {Page} from "../components/organisms/Page.tsx";
import {Text} from "../components/atoms/Text.tsx";
import {useTranslation} from "react-i18next";
import {AboutLinks} from "../components/atoms/AboutLinks.tsx";

interface AboutInterface {
    question: string;
    response: string;
}

export const AboutPage = () => {
    const [about] = useTranslation("about")

    const questions = about('questions', {returnObjects: true}) as unknown as AboutInterface[]

    return (
        <Page>
            <AboutLinks figmaUrl={about("figma")} githubUrl={about("github")} />

            <div className='w-[100%] flex flex-col items-center gap-y-4 mt-10'>
                {
                    questions.map((question, index) => (
                        <div key={`about${index}`} className='flex flex-col items-start w-[100%]'>
                            <Text value={question.question} size='xl' gradient />
                            <Text value={question.response} size='m' />
                        </div>
                    ))
                }
            </div>
        </Page>
    )
}