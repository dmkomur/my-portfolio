import React from "react";

import {
    StyledBackButtonWrapper,
    StyledBackSvg,
    StyledBackText,
} from "./BackButton.styled";

interface BackButtonProps {
    onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
    return (
        <StyledBackButtonWrapper onClick={onClick}>
            <StyledBackText>back</StyledBackText>
            <StyledBackSvg />
        </StyledBackButtonWrapper>
    );
};

export default BackButton;
