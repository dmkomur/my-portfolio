import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/cv" element={<ContactPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
