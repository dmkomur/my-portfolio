import styled from "styled-components";

import breakpoints from "@/tools/breakpoints";
import colors from "@/tools/colors";
import SvgBack from "./Back";

export const StyledBackButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 24px;
    cursor: pointer;
`;

export const StyledBackSvg = styled(SvgBack)`
    height: 100%;
    width: 40px;

    @media (min-width: ${breakpoints.tablet}) {
        width: 42px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        width: 44px;
    }
    transition: all 0.3s ease-in;
    & :hover {
        fill: ${colors.secondaryLight};
    }
`;

export const StyledBackText = styled.p`
    text-align: end;
    font-size: 16px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 17px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 18px;
    }
`;
