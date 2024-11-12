import {navigateOutside} from "../../helpers/helper.ts";

interface CertificateItemProps {
    title: string;
    center: string;
    date: string;
    url?: string;
}

export const CertificateItem = ({
    title,
    center,
    date,
    url
}: CertificateItemProps) => {
    return (
        <div
            className='flex align-top gap-x-2'
        >
            <div>
                <img src="/icons/diploma.svg" alt="Diploma" className='min-w-[32px] w-[32px] h-auto'/>
            </div>
            <div className='flex flex-col gap-y-2' onClick={() => {
                if (url) navigateOutside(url)
            }}>
                <h3 className='text-xl font-bold strong-style'>{title}</h3>
                <div className='font-semibold'>{center}</div>
                <div className='text-sm text-light p-0 m-0'>{date}</div>
            </div>
        </div>
    )
}