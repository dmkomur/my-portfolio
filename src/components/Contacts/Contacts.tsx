import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
    StyledContactsHeader,
    StyledContactsSvgWrapper,
    StyledMailSvg,
    StyledLinkedSvg,
    StyledGitSvg,
    StyledContactsText,
    BubbleWrapper,
} from "./Contacts.styled";
import BackButton from "../Back/BackButton";

interface NavigationProps {
    handleGoBack: () => void;
}

const Contacts: React.FC<NavigationProps> = ({ handleGoBack }) => {
    const textToCopy = "komur.d@gmail.com";
    const [isBubbleVisible, setIsBubbleVisible] = useState(false);

    const handleCopyClick = () => {
        setIsBubbleVisible(true);
        setTimeout(() => {
            setIsBubbleVisible(false);
        }, 2000);
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            handleCopyClick();
        } catch (err) {
            console.error("cannot copy email", err);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isBubbleVisible && (
                    <BubbleWrapper
                        as={motion.div}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        Email copied
                    </BubbleWrapper>
                )}
            </AnimatePresence>

            <BackButton onClick={handleGoBack} />
            <StyledContactsText>
                I am a full-stack developer <br />
                familiar with the following technologies: <br />
                JS, TS, HTML + CSS, React, Node.js.
            </StyledContactsText>
            <StyledContactsHeader>Contacts:</StyledContactsHeader>
            <StyledContactsSvgWrapper>
                <StyledMailSvg onClick={handleCopy} />

                <a
                    href="https://www.linkedin.com/in/dmytro-komurko-5075a8194/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StyledLinkedSvg />
                </a>
                <a
                    href="https://github.com/dmkomur?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StyledGitSvg />
                </a>
            </StyledContactsSvgWrapper>
        </>
    );
};

export default Contacts;
