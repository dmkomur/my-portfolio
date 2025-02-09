import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import StartedCenteredContainer from "@/components/StartedCenteredContainer";
import Greetings from "@/components/Greetings/Greetings";
import Navigation from "@/components/Navigation/Navigation";

const HomePage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        setIsVisible(false);
        setTimeout(() => {
            navigate(path);
        }, 600);
    };
    return (
        <StartedCenteredContainer>
            <AnimatePresence>
                {isVisible && (
                    <>
                        <motion.div
                            key="greetings"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }} // Анимация исчезновения
                            transition={{ duration: 0.6 }}
                        >
                            <Greetings />
                        </motion.div>

                        <motion.div
                            key="navigation"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }} // Анимация исчезновения
                            transition={{ duration: 0.6 }}
                        >
                            <Navigation onNavigate={handleNavigation} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </StartedCenteredContainer>
    );
};
export default HomePage;
