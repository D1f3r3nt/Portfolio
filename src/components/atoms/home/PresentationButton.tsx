interface PresentationButtonProps {
    src: string;
    label: string;
    onClick: () => void;
}

export const PresentationButton = ({src, label, onClick}: PresentationButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1 bg-[#1e2737] rounded-full flex gap-x-1 text-[16px]   
            transition
            border-[1px] border-[#3b3e54] 
            md:hover:scale-105 md:hover:cursor-pointer`}>
            <img src={src} alt="Image" className='w-[1rem] h-auto'/>
            {label}
        </button>
    )
}