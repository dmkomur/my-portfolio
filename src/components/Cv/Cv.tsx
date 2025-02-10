import React from "react";

import { StyledCvText, StyledCvWrapper, StyledDownloadSvg } from "./Cv.styled";

const Cv: React.FC = () => {
    return (
        <>
            <StyledCvWrapper href="/public/cv.pdf" download="cv.pdf">
                <StyledDownloadSvg />
                <StyledCvText>click to download my CV</StyledCvText>
            </StyledCvWrapper>
        </>
    );
};

export default Cv;
