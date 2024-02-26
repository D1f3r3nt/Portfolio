import {Text} from "../atoms/Text.tsx";

interface CenterCardProps {
    title: string;
    date: string;
    description: string;
}

export const CenterCard = ({title, description, date} : CenterCardProps) => {

    return (
        <div className='w-[100%] flex flex-col items-center'>
            <Text value={title} size='l' gradient className='mb-3'/>
            <Text value={date} size='s' className='mb-3'/>
            <Text value={description} size='m' className='mb-3 text-center max-w-[850px]'/>
        </div>
    )
}