import {useNavigate} from "react-router-dom";

interface BackButtonProps {
    label: string;
}

export const BackButton = ({label}: BackButtonProps) => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex justify-start items-center'>
            <div onClick={() => navigate('/')}
                 className='strong-style md:text-[36px] text-[26px] flex font-bold md:hover:cursor-pointer md:hover:-translate-x-4'>
                <img src="../src/assets/icons/arrow_left.svg" alt="Arrow left" className='w-[32px] h-auto'/>
                {label}
            </div>
        </div>
    )
}