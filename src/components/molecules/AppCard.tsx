import {Text} from "../atoms/Text.tsx";
import {GoldButton} from "./GoldButton.tsx";
import {AppsInterface} from "../../pages/AppsPage.tsx";

import website from "../../assets/icons/globe-americas-enabled.svg"
import appStore from "../../assets/icons/app-store.svg"
import googlePlay from "../../assets/icons/google-play.svg"
import github from "../../assets/icons/github.svg"
import {navigateOutside} from "../../helpers/helper.ts";

interface AppCardProps {
    app: AppsInterface;
    imageFirst?: boolean;
}

export const AppCard = ({app, imageFirst = false}: AppCardProps) => {

    return (
        <div className='w-[100%] max-h-[500px] flex flex-row'>
            {
                imageFirst &&
                <img src={`./src/assets/mockups/${app.image}`} alt="Mockup" className='h-[100%]'/>
            }
            <div className='flex flex-col bg-[#2E2E2E] w-[100%] rounded-[8px] p-8'>
                <div className='flex flex-row w-[100%] justify-between mb-5'>
                    <Text value={app.name} size="l" gradient/>
                    <div className='flex flex-row gap-x-4'>
                        {
                            app.url &&
                            <GoldButton onClick={() => navigateOutside(app.url!)} >
                                <img src={website} alt="website"/>
                            </GoldButton>
                        }

                        {
                            app.appStore &&
                            <GoldButton onClick={() => navigateOutside(app.appStore!)} >
                                <img src={appStore} alt="app store"/>
                            </GoldButton>
                        }

                        {
                            app.googlePlay &&
                            <GoldButton onClick={() => navigateOutside(app.googlePlay!)} >
                                <img src={googlePlay} alt="google play"/>
                            </GoldButton>
                        }

                        {
                            app.github &&
                            <GoldButton onClick={() => navigateOutside(app.github!)} >
                                <img src={github} alt="github"/>
                            </GoldButton>
                        }
                    </div>
                </div>
                <Text value={app.description} size='m' />
            </div>
            {
                !imageFirst &&
                <img src={`./src/assets/mockups/${app.image}`} alt="Mockup" className='h-[100%]'/>
            }
        </div>
    )
}