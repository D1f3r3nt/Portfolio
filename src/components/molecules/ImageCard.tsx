import {CenterCard} from "./CenterCard.tsx";

interface ImageCardProps {
    title: string;
    date: string;
    description: string;
    image: string;
    imageFirst?: boolean;
}

export const ImageCard = ({title, description, image, date, imageFirst = true}: ImageCardProps) => {
  return (
      <div className='grid grid-cols-3'>
          {
              imageFirst &&
              <img src={`./src/assets/diplomas/${image}`} alt="Diploma" className='gold-gradient-image h-[200px]'/>
          }
          <CenterCard title={title} date={date} description={description} className='col-span-2'/>
          {
              !imageFirst &&
              <img src={`./src/assets/diplomas/${image}`} alt="Diploma" className='gold-gradient-image h-[200px]'/>
          }
      </div>
  )
}