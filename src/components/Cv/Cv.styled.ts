import styled, { keyframes } from "styled-components";

import breakpoints from "@/tools/breakpoints";
import colors from "@/tools/colors";
import SvgDownload from "./Download";

const strokeAnimation = keyframes`
  0% {
    stroke: #e6f6f6; 
  }
  25% {
    stroke: #e2f9ca; 
  }
  50% {
    stroke: #fadef9; 
  }
  75% {
    stroke: #dee1fa; 
  }
  100% {
    stroke: #e6f6f6; 
  }
`;

export const StyledDownloadSvg = styled(SvgDownload)`
    width: 52px;
    height: auto;
    cursor: pointer;
    animation: ${strokeAnimation} 3s ease-in-out infinite;
`;

export const StyledCvWrapper = styled.a`
    display: flex;
    color: ${colors.mainWhite};
    flex-direction: row;
    gap: 16px;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover > * {
        stroke: ${colors.secondaryLight};
        color: ${colors.secondaryLight};
        transition: all 0.3s ease;
    }
`;

export const StyledCvText = styled.p`
    font-size: 20px;
    @media (min-width: ${breakpoints.tablet}) {
        font-size: 22px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        font-size: 24px;
    }
`;
