import {Page} from "../components/organisms/Page.tsx";
import {BackButton} from "../components/atoms/BackButton.tsx";
import {CertificateItem} from "../components/atoms/CertificateItem.tsx";

export const CertificatesPage = () => {

    return (
        <Page showNavbar={false}>
            <BackButton label={'My Certificates'}/>

            <div className='w-full flex flex-col gap-y-12' id="certificates">

                <CertificateItem title={'AWS Certified Solutions Architect'}
                                 center={'Amazon Web Services (AWS)'}
                                 date={'Oct 2024 - Oct 2027'}
                                 url={'https://www.credly.com/badges/41af67de-b56f-4a59-948d-92afffb2b18a/public_url'}
                />

                <CertificateItem title={'AWS Certified Solutions Architect'}
                                 center={'Amazon Web Services (AWS)'}
                                 date={'Oct 2024 - Oct 2027'}
                                 url={'https://www.credly.com/badges/41af67de-b56f-4a59-948d-92afffb2b18a/public_url'}
                />

                <CertificateItem title={'AWS Certified Solutions Architect'}
                                 center={'Amazon Web Services (AWS)'}
                                 date={'Oct 2024 - Oct 2027'}
                                 url={'https://www.credly.com/badges/41af67de-b56f-4a59-948d-92afffb2b18a/public_url'}
                />

                <CertificateItem title={'AWS Certified Solutions Architect'}
                                 center={'Amazon Web Services (AWS)'}
                                 date={'Oct 2024 - Oct 2027'}
                                 url={'https://www.credly.com/badges/41af67de-b56f-4a59-948d-92afffb2b18a/public_url'}
                />
            </div>
        </Page>
    )
}