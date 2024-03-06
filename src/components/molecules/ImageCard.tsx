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
      <div className='md:grid md:grid-cols-3'>
          {
              imageFirst &&
              <div className={'flex justify-center items-center'}>
                <img src={image} alt="Diploma" className='md:flex hidden gold-gradient-image max-h-[200px] w-auto'/>
              </div>
          }
          <CenterCard title={title} date={date} description={description} className='col-span-2 px-5'/>
          {
              !imageFirst &&
              <div className={'flex justify-center items-center'}>
                  <img src={image} alt="Diploma" className='md:flex hidden gold-gradient-image max-h-[200px] w-auto'/>
              </div>
          }
      </div>
  )
}