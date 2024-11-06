import {CertificateItem} from "../../atoms/CertificateItem.tsx";
import {ShowMoreButton} from "../../atoms/home/ShowMoreButton.tsx";
import {useNavigate} from "react-router-dom";

export const CertificatesHome = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col gap-y-12' id="certificates">
            <span className='font-bold'>
                Certificates I've earned:
            </span>

            <CertificateItem title={'AWS Certified Solutions Architect'} center={'Amazon Web Services (AWS)'} date={'Oct 2024 - Oct 2027'} url={'https://www.credly.com/badges/41af67de-b56f-4a59-948d-92afffb2b18a/public_url'}/>
            
            <ShowMoreButton label={'certificates'} onClick={() => navigate('/certificates')} />
        </div>
    );
}