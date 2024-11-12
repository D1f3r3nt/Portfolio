import {CertificateItem} from "../../atoms/CertificateItem.tsx";
import {ShowMoreButton} from "../../atoms/home/ShowMoreButton.tsx";
import {useNavigate} from "react-router-dom";
import {useData} from "../../../hooks/useData.ts";
import {Loader} from "../../atoms/Loader.tsx";

export const CertificatesHome = () => {

    const navigate = useNavigate();
    const { certificates, isLoading } = useData();
    const offset = 3;

    return (
        <div className='w-full flex flex-col gap-y-12' id="certificates">
            <span className='font-bold'>
                Certificates I've earned:
            </span>

            {
                isLoading &&
                <Loader />
            }
            {
                !isLoading &&
                certificates.length > 0 &&
                certificates.slice(0, offset).map(cert => <CertificateItem
                    key={cert.title}
                    title={cert.title}
                    center={cert.place}
                    date={cert.date}
                    url={cert.url}
                />)
            }
            {
                !isLoading &&
                certificates.length > offset &&
                <ShowMoreButton label={'certificates'} onClick={() => navigate('/certificates')} />
            }
        </div>
    );
}