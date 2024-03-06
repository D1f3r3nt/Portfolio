import logo from '../../assets/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";
import {Button} from "../atoms/Button.tsx";
import {Text} from "../atoms/Text.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {DropdownLanguage} from "../atoms/DropdownLanguage.tsx";
import {useTranslation} from "react-i18next";

export const Navbar = () => {
    const [t] = useTranslation("global")
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    fixed ${isOpen ? 'left-2 top-2' : 'left-5 top-5'} !z-50 lg:hidden
                    p-2 text-sm text-yellow-400
                    rounded-lg focus:outline-none
                    ring-2 ring-yellow-400 bg-[#2E2E2E]
                    `}>
                {
                    isOpen ? <CloseIcon/> : <MenuIcon/>
                }
            </Button>

            <div
                className={`
                    ${isOpen ? '' : 'lg:translate-x-0 -translate-x-full'}
                    fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-[#2E2E2E]
                    flex flex-col justify-between items-center
                    `}>

                <img src={logo} alt="Logo diferent"/>

                <div className='flex flex-col justify-center items-center gap-y-3'>
                    <button onClick={() => navigate('/')}>
                        <Text value={t('header.home')} size="m" gradient underline={pathname === '/'}/>
                    </button>
                    <button onClick={() => navigate('/apps')}>
                        <Text value={t('header.apps')} size="m" gradient underline={pathname === '/apps'}/>
                    </button>
                    <button onClick={() => navigate('/studies')}>
                        <Text value={t('header.studies')} size="m" gradient underline={pathname === '/studies'}/>
                    </button>
                    <button onClick={() => navigate('/experience')}>
                        <Text value={t('header.experience')} size="m" gradient underline={pathname === '/experience'}/>
                    </button>
                    <button onClick={() => navigate('/about')}>
                        <Text value={t('header.about')} size="m" gradient underline={pathname === '/about'}/>
                    </button>
                </div>

                <div className='flex flex-col justify-center items-center gap-y-2 mb-4'>
                    <DropdownLanguage />
                    <Text value="by Marc Santisteban Ruiz" size="s" gradient/>
                </div>
            </div>
        </>
    )
}