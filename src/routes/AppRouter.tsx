import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage.tsx";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
    )
}