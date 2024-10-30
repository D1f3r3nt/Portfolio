import { Navbar } from "../components/molecules/Navbar.tsx";

export const HomePage = () => {

    return (
        <div className='w-full h-auto flex justify-center items-center background-gradient'>
            <Navbar />
            <div className='w-full lg:max-w-4xl md:max-w-2xl'>
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
    )
}