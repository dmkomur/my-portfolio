import styled from "styled-components";
import breakpoints from "@/tools/breakpoints";
import colors from "@/tools/colors";

export const StyledPortfolioHeader = styled.h3`
    font-size: 32px;
    position: relative;
    margin-bottom: 12px;
    width: 100%;
    text-align: left;
    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: ${colors.mainWhite};
        position: absolute;
        bottom: -8px;
        left: 0;
    }
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 34px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 36px;
    }
`;
export const StyledPortfolioText = styled.p`
    width: 100%;
    max-width: 400px;
    font-size: 16px;
    margin-bottom: 8px;
`;
