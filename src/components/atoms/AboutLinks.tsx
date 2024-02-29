import {GoldButton} from "../molecules/GoldButton.tsx";
import {navigateOutside} from "../../helpers/helper.ts";

import github from "../../assets/icons/github.svg";
import figma from "../../assets/icons/figma.svg";

interface AboutLinksProps {
    figmaUrl: string;
    githubUrl: string;
}

export const AboutLinks = ({figmaUrl, githubUrl}: AboutLinksProps) => {

    return (
        <div className='absolute top-5 right-5 flex flex-row gap-x-2'>
            <GoldButton onClick={() => navigateOutside(figmaUrl)}>
                <img src={figma} alt="Figma"/>
            </GoldButton>

            <GoldButton onClick={() => navigateOutside(githubUrl)}>
                <img src={github} alt="Github"/>
            </GoldButton>
        </div>
    )
}