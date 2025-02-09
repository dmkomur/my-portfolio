import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import StartedCenteredContainer from "@/components/StartedCenteredContainer";
import Portfolio from "@/components/Portfolio/Portfolio";
import ProjectsList from "@/components/ProjectsList/ProjectsList";

const PortfolioPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleHomeNavigation = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/");
        }, 600);
    };
    return (
        <StartedCenteredContainer>
            <AnimatePresence>
                {isVisible && (
                    <>
                        <motion.div
                            key="portfolio"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }} // Анимация исчезновения
                            transition={{ duration: 0.6 }}
                        >
                            <Portfolio handleGoBack={handleHomeNavigation} />
                        </motion.div>

                        <motion.div
                            key="projectslist"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.6 }}
                        >
                            <ProjectsList />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </StartedCenteredContainer>
    );
};
export default PortfolioPage;
