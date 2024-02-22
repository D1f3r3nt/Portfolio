import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./routes/AppRouter.tsx";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
