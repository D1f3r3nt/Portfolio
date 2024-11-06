import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";
import {ProjectsPage} from "../pages/ProjectsPage.tsx";
import {CertificatesPage} from "../pages/CertificatesPage.tsx";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/certificates' element={<CertificatesPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}