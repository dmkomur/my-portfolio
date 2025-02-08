import React, { ReactNode } from "react";
import styled from "styled-components";

const StarteredWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    min-height: 100vh;
`;

interface StarteredLayoutProps {
    children: ReactNode;
}

const StarteredLayout: React.FC<StarteredLayoutProps> = ({ children }) => {
    return <StarteredWrapper>{children}</StarteredWrapper>;
};

export default StarteredLayout;
