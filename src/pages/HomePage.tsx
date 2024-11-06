import {Page} from "../components/organisms/Page.tsx";
import {PresentationHome} from "../components/molecules/home/PresentationHome.tsx";
import {ProjectsHome} from "../components/molecules/home/ProjectsHome.tsx";
import {WorkingHome} from "../components/molecules/home/WorkingHome.tsx";
import {AboutHome} from "../components/molecules/home/AboutHome.tsx";
import {CertificatesHome} from "../components/molecules/home/CertificatesHome.tsx";

export const HomePage = () => {

    return (
        <Page>
            <PresentationHome />

            <hr/>

            <WorkingHome />

            <hr/>

            <ProjectsHome />

            <hr/>

            <CertificatesHome />

            <hr/>

            <AboutHome />
        </Page>
    )
}