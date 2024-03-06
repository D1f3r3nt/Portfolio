import {Page} from "../components/organisms/Page.tsx";
import {GoldSwitch} from "../components/molecules/GoldSwitch.tsx";
import {useEffect, useState} from "react";

import search from "../assets/icons/search.svg"
import androidEnabled from "../assets/icons/android-enabled.svg"
import androidDisabled from "../assets/icons/android-disabled.svg"
import appleEnabled from "../assets/icons/apple-enabled.svg"
import appleDisabled from "../assets/icons/apple-disabled.svg"
import serverEnabled from "../assets/icons/server-enabled.svg"
import serverDisabled from "../assets/icons/server-disabled.svg"
import websiteEnabled from "../assets/icons/globe-americas-enabled.svg"
import websiteDisabled from "../assets/icons/globe-americas-disabled.svg"
import {useTranslation} from "react-i18next";
import {AppCard} from "../components/molecules/AppCard.tsx";
import {useFilter} from "../hooks/useFilter.ts";

export interface AppsInterface {
    name: string;
    type: string;
    description: string;
    image: string;
    url?: string;
    github?: string;
    appStore?: string;
    googlePlay?: string;
}

export const AppsPage = () => {

    const [global] = useTranslation("global")
    const [appsT] = useTranslation("apps")
    const { filterApps } = useFilter()

    const apps = appsT('data', {returnObjects: true}) as unknown as AppsInterface[]
    const [data, setData] = useState<AppsInterface[]>([])

    const [isAndroid, setIsAndroid] = useState(true)
    const [isApple, setIsApple] = useState(true)
    const [isServer, setIsServer] = useState(true)
    const [isWebsite, setIsWebsite] = useState(true)
    const [filterText, setFilterText] = useState<string | undefined>(undefined)

    useEffect(() => {
        setData(filterApps(apps, isAndroid, isApple, isWebsite, isServer, filterText))
    }, [apps, isAndroid, isApple, filterText, isServer, isWebsite])

    return (
        <Page>
            <div className='w-[100%] sm:grid sm:grid-cols-2'>
                <div className='flex flex-row items-center gap-x-2 lg:w-[70%] sm:w-[90%] w-[100%] h-[60px] bg-[#676767] rounded-[30px] px-5 py-2'>
                    <img src={search} alt="Search Icon"/>
                    <input
                        type="text"
                        className="w-[100%] h-[100%] bg-transparent text-[#ECECEC] placeholder:text-[#2E2E2E] outline-none"
                        placeholder={`${global("common.search")}...`}
                        value={filterText}
                        onChange={e => setFilterText(e.target.value)}
                    />
                </div>
                <div className='sm:flex hidden flex-row justify-end gap-x-10 mr-5'>
                    <GoldSwitch iconEnabled={androidEnabled} iconDisabled={androidDisabled} isEnabled={isAndroid} setIsEnabled={setIsAndroid}/>
                    <GoldSwitch iconEnabled={appleEnabled} iconDisabled={appleDisabled} isEnabled={isApple} setIsEnabled={setIsApple}/>
                    <GoldSwitch iconEnabled={serverEnabled} iconDisabled={serverDisabled} isEnabled={isServer} setIsEnabled={setIsServer}/>
                    <GoldSwitch iconEnabled={websiteEnabled} iconDisabled={websiteDisabled} isEnabled={isWebsite} setIsEnabled={setIsWebsite}/>
                </div>
            </div>
            <div className='w-[100%] flex flex-col items-center lg:px-10 pt-10 gap-y-10'>
                {
                    data.map((app, index) => (
                        <AppCard key={`app${index}`} app={app} imageFirst={index % 2 !== 0}/>
                    ))
                }
            </div>
        </Page>
    )
}