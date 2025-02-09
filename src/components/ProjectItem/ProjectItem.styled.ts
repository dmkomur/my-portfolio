import styled, { keyframes } from "styled-components";

import breakpoints from "@/tools/breakpoints";
import SvgArrowLink from "../Navigation/NavArrow";

export const StyledProjectItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const StyledProjectItemHeader = styled.h4`
    font-size: 18px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 20px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 24px;
    }
`;

export const StyledProjectItemHeaderWrapper = styled.a`
    display: flex;
    flex-direction: row;
    gap: 4px;
`;

export const StyledProjectDescription = styled.div`
    font-size: 16px;
`;
export const StyledProjectLink = styled.a`
    font-size: 16px;
    text-decoration: underline;
`;
export const StyledProjectLinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    padding: 4px 14px;
    @media (min-width: ${breakpoints.tablet}) {
        padding: 4px 16px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        padding: 4px 18px;
    }
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
export const StyledArrowProjectSvg = styled(SvgArrowLink)`
    width: 16px;
    height: auto;
    animation: ${fillAnimation} 3s ease-in-out infinite;
    @media (min-width: ${breakpoints.tablet}) {
        width: 18px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        width: 20px;
    }
`;
