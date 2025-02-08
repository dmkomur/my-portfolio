import { Route, BrowserRouter, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <BrowserRouter>
            <motion.div
                style={{ minHeight: "100vh" }} // Анимация на весь экран
                animate={{
                    rotateX: [0, 6, 0, -1, 0], // Наклон по оси X
                    rotateY: [-3, -10, 0, 2, 2], // Наклон по оси Y
                }}
                transition={{
                    duration: 6, // Длительность одного цикла
                    ease: "easeInOut", // Плавные переходы
                    repeat: Infinity, // Бесконечная анимация
                }}
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/cv" element={<ContactPage />} />
                </Routes>
            </motion.div>
        </BrowserRouter>
    );
}

export default App;
