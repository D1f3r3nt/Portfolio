import logo from '../../assets/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import {Button} from "../atoms/Button.tsx";
import {Text} from "../atoms/Text.tsx";

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="
                fixed left-2 top-2 !z-50 sm:hidden
                p-2 text-sm text-yellow-400
                rounded-lg focus:outline-none
                ring-2 ring-yellow-400 bg-[#2E2E2E]
                ">
                {
                    isOpen ? <CloseIcon /> : <MenuIcon/>
                }
            </Button>

            <div
                className={`
                    ${isOpen ? '' : 'sm:translate-x-0 -translate-x-full'}
                    fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-[#2E2E2E]
                    flex flex-col justify-between items-center
                    `}>

                <img src={logo} alt="Logo diferent"/>

                <div className='flex flex-col justify-center items-center gap-y-3'>
                    <Text value="¿Quién soy?" size="m" gradient underline />
                    <Text value="Aplicaciones" size="m" gradient />
                    <Text value="Estudios" size="m" gradient />
                    <Text value="Experiencia" size="m" gradient />
                    <Text value="Esta página" size="m" gradient />
                </div>

                <div className='flex flex-col justify-center items-center gap-y-2 mb-4'>
                    <p> Español </p>
                    <Text value="by Marc Santisteban Ruiz" size="s" gradient/>
                </div>
            </div>
        </>
    )
}