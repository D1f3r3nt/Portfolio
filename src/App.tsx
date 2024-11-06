import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./routes/AppRouter.tsx";
import {ScrollToTop} from "./utils/ScrollToTop.tsx";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <AppRouter />
    </BrowserRouter>
  )
}

export default App
