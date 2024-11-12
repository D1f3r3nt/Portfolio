import {Page} from "../components/organisms/Page.tsx";
import {BackButton} from "../components/atoms/BackButton.tsx";
import {CertificateItem} from "../components/atoms/CertificateItem.tsx";
import {useData} from "../hooks/useData.ts";
import {Loader} from "../components/atoms/Loader.tsx";

export const CertificatesPage = () => {

    const {isLoading, certificates} = useData()

    return (
        <Page showNavbar={false}>
            <BackButton label={'My Certificates'}/>

            <div className='w-full flex flex-col gap-y-12'>
                {
                    isLoading &&
                    <Loader/>
                }
                {
                    !isLoading &&
                    certificates.length > 0 &&
                    certificates.map(cert => <CertificateItem
                        key={cert.title}
                        title={cert.title}
                        center={cert.place}
                        date={cert.date}
                        url={cert.url}
                    />)
                }
            </div>
        </Page>
    )
}