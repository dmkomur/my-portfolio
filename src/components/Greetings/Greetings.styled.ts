import styled from "styled-components";

import breakpoints from "@/tools/breakpoints";
import colors from "@/tools/colors";

export const StyledGreetings = styled.h2`
    font-size: 40px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 42px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 44px;
    }
`;
export const StyledText = styled.h3`
    font-size: 32px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 34px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 36px;
    }
`;

export const StyledName = styled.h1`
    font-size: 44px;
    position: relative;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 46px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 48px;
    }

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
`;
