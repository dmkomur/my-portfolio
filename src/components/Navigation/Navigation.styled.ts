import styled, { keyframes } from "styled-components";

import SvgArrowLink from "./NavArrow";

import breakpoints from "@/tools/breakpoints";
import colors from "@/tools/colors";

export const StyledNavContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: 20px;
    margin-top: 28px;
    @media (min-width: ${breakpoints.tablet}) {
        margin-top: 32px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        gap: 24px;
    }
`;

export const StyledLink = styled.div`
    text-decoration: none;
    font-size: 26px;
    color: ${colors.mainWhite};
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
        color: ${colors.secondaryLight};
    }

    @media (min-width: ${breakpoints.tablet}) {
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 30px;
    }
`;
export const StyledLinkItem = styled.li`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: baseline;
`;

const fillAnimation = keyframes`
  0% {
    fill: #e6f6f6; 
  }
  25% {
    fill: #e2f9ca; 
  }
  50% {
    fill: #fadef9; 
  }
  75% {
    fill: #dee1fa; 
  }
  100% {
    fill: #e6f6f6; 
  }
`;
export const StyledArrowSvg = styled(SvgArrowLink)`
    width: 22px;
    height: auto;
    animation: ${fillAnimation} 3s ease-in-out infinite;
    @media (min-width: ${breakpoints.tablet}) {
    }

    @media (min-width: ${breakpoints.desktop}) {
        width: 26px;
    }
`;
