import React, { ReactNode } from "react";
import styled from "styled-components";

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

interface CenterWrapperProps {
    children: ReactNode;
}

const CenteredLayout: React.FC<CenterWrapperProps> = ({ children }) => {
    return <CenterWrapper>{children}</CenterWrapper>;
};

export default CenteredLayout;
