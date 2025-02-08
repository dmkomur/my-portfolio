import React from "react";
import { motion } from "framer-motion";

import {
    StyledNavContainer,
    StyledLink,
    StyledLinkItem,
    StyledArrowSvg,
} from "./Navigation.styled";

interface NavigationProps {
    onNavigate: (path: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
    return (
        <motion.nav
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
        >
            <StyledNavContainer>
                <StyledLinkItem onClick={() => onNavigate("/portfolio")}>
                    <StyledArrowSvg />
                    <StyledLink as="div">PORTFOLIO</StyledLink>
                </StyledLinkItem>
                <StyledLinkItem onClick={() => onNavigate("/cv")}>
                    <StyledArrowSvg />
                    <StyledLink as="div">CONTACTS + CV</StyledLink>
                </StyledLinkItem>
            </StyledNavContainer>
        </motion.nav>
    );
};

export default Navigation;
