interface ShowMoreButtonProps {
    label: string;
    onClick: () => void;
}

export const ShowMoreButton = ({
                                   label,
                                   onClick,
                               }: ShowMoreButtonProps) => {
    return (
        <div className='w-full flex justify-center items-center'>
            <div onClick={onClick} className='hover:cursor-pointer flex hover:scale-105 justify-center items-center'>
                Show more {label}
                <img src="../src/assets/icons/arrow_right.svg" alt="Arrow right" className='w-[25px]'/>
            </div>
        </div>
    )
}