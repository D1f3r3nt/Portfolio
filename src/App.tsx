import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./routes/AppRouter.tsx";
import {ScrollToTop} from "./utils/ScrollToTop.tsx";
import {ReactFlowProvider} from "@xyflow/react";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
        <ReactFlowProvider>
            <AppRouter />
        </ReactFlowProvider>
    </BrowserRouter>
  )
}

export default App
