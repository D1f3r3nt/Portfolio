import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {ProjectsPage} from "../pages/ProjectsPage.tsx";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}