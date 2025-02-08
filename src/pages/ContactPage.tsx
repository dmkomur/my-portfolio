import React from "react";
import { motion } from "framer-motion";

import Container from "@/components/Container";
import StarteredLayout from "@/components/StarteredLayout";
import CenteredLayout from "@/components/CenteredLayout";
import Contacts from "@/components/Contacts/Contacts";
import Cv from "@/components/Cv/Cv";

const ContactPage: React.FC = () => {
    return (
        <Container>
            <CenteredLayout>
                <StarteredLayout>
                    <motion.div
                        key="greetings"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Contacts />
                    </motion.div>
                    <motion.div
                        key="navigation"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Cv />
                    </motion.div>
                </StarteredLayout>
            </CenteredLayout>
        </Container>
    );
};
export default ContactPage;
