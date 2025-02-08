import React from "react";
import styled from "styled-components";

import breakpoints from "@/tools/breakPoints";

interface ContainerProps {
    children: ReactNode;
}

const StyledContainer = styled.div`
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;

    @media (min-width: ${breakpoints.mobile}) {
        max-width: ${breakpoints.mobile};
    }

    @media (min-width: ${breakpoints.tablet}) {
        max-width: ${breakpoints.tablet};
        padding: 0 20px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        max-width: ${breakpoints.desktop};
        padding: 0 30px;
    }
`;

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
