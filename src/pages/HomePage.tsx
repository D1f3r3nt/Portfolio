import { Navbar } from "../components/molecules/Navbar.tsx";

export const HomePage = () => {

    return (
        <>
            <div className='absolute top-0 bottom-0 z-[-2] min-h-full w-full bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'/>

            <div className='relative w-full h-auto flex justify-center items-center '>
                <Navbar />
                <div className='w-full lg:max-w-4xl md:max-w-2xl h-screen'>
                    <div className='bg-red-600 mt-[150px] h-[500px]'>
                        <div className='text-[30px]'>
                            Hi, I'm Marc Santisteban
                        </div>
                    </div>
                    <div className='bg-red-600 mt-[150px] h-[500px]'>
                        <div className='text-[30px]'>
                            Hi, I'm Marc Santisteban
                        </div>
                    </div>
                    <div className='bg-red-600 mt-[150px] h-[500px]'>
                        <div className='text-[30px]'>
                            Hi, I'm Marc Santisteban
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}