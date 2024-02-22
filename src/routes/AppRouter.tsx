import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {AppsPage} from "../pages/AppsPage.tsx";
import {ExperiencePage} from "../pages/ExperiencePage.tsx";
import {AboutPage} from "../pages/AboutPage.tsx";
import {StudiesPage} from "../pages/StudiesPage.tsx";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/apps' element={<AppsPage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/studies' element={<StudiesPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}