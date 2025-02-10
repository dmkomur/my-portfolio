import styled from "styled-components";

import breakpoints from "@/tools/breakpoints";
import SvgMail from "./Mail";
import SvgLinked from "./LinkedIn";
import SvgGit from "./GitHub";
import colors from "@/tools/colors";

export const StyledContactsHeader = styled.h3`
    font-size: 32px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 34px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 36px;
    }
`;

export const StyledContactsText = styled.p`
    font-size: 16px;
    margin-bottom: 16px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 18px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 20px;
    }
`;
export const StyledContactsSvgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
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
export const StyledMailSvg = styled(SvgMail)`
    width: 52px;
    height: auto;
    cursor: pointer;
    transition: all 0.3s ease-in;
    & :hover {
        stroke: ${colors.secondaryLight};
    }
`;
export const StyledLinkedSvg = styled(SvgLinked)`
    width: 40px;
    height: auto;
    fill: ${colors.mainWhite};
    cursor: pointer;
    transition: all 0.3s ease-in;
    & :hover {
        fill: ${colors.secondaryLight};
        transition: all 0.3s ease-in;
    }
`;
export const StyledGitSvg = styled(SvgGit)`
    width: 40px;
    height: auto;
    cursor: pointer;
    transition: all 0.3s ease-in;
    & :hover {
        stroke: ${colors.secondaryLight};
    }
`;

export const BubbleWrapper = styled.div`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${colors.secondaryLight};
    color: black;
    padding: 10px 20px;
    border-radius: 8px;
    pointer-events: none;
`;
