import React from "react";

import {
    StyledNavContainer,
    StyledLink,
    StyledLinkItem,
    StyledArrowSvg,
} from "./Navigation.styled";

const Navigation: React.FC = () => {
    return (
        <StyledNavContainer>
            <StyledLinkItem>
                <StyledArrowSvg />
                <StyledLink to="/portfolio">PORTFOLIO</StyledLink>
            </StyledLinkItem>
            <StyledLinkItem>
                <StyledArrowSvg />
                <StyledLink to="/cv">CONTACTS + CV</StyledLink>
            </StyledLinkItem>
        </StyledNavContainer>
    );
};

export default Navigation;
