import React from "react";

import { StyledPortfolioHeader, StyledPortfolioText } from "./Portfolio.styled";
import BackButton from "../Back/BackButton";

interface NavigationProps {
    handleGoBack: () => void;
}

const Portfolio: React.FC<NavigationProps> = ({ handleGoBack }) => {
    return (
        <>
            <BackButton onClick={handleGoBack} />
            <StyledPortfolioText>
                These are all projects in which I took part and was a member of
                a team or developed everything myself.
            </StyledPortfolioText>
            <StyledPortfolioHeader>Portfolio:</StyledPortfolioHeader>
        </>
    );
};

export default Portfolio;
