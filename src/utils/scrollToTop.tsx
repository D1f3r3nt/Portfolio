import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'instant'});
    }, [pathname]);

    return null;
}