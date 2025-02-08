import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import CenteredLayout from "@/components/CenteredLayout";
import StarteredLayout from "@/components/StarteredLayout";
import Container from "@/components/Container";
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
        <Container>
            <CenteredLayout>
                <StarteredLayout>
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
                </StarteredLayout>
            </CenteredLayout>
        </Container>
    );
};
export default HomePage;
