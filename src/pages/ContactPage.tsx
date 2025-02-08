import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Container from "@/components/Container";
import StarteredLayout from "@/components/StarteredLayout";
import CenteredLayout from "@/components/CenteredLayout";
import Contacts from "@/components/Contacts/Contacts";
import Cv from "@/components/Cv/Cv";
import { useNavigate } from "react-router-dom";

const ContactPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const handleHomeNavigation = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/");
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
                                    key="contacts"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Contacts
                                        handleGoBack={handleHomeNavigation}
                                    />
                                </motion.div>
                                <motion.div
                                    key="cv"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Cv />
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </StarteredLayout>
            </CenteredLayout>
        </Container>
    );
};
export default ContactPage;
