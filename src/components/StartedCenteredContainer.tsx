import React, { ReactNode } from "react";

import Container from "./Container";
import StarteredLayout from "./StarteredLayout";
import CenteredLayout from "./CenteredLayout";

interface StartedCenteredContainerProps {
    children: ReactNode;
}

const StartedCenteredContainer: React.FC<StartedCenteredContainerProps> = ({
    children,
}) => {
    return (
        <Container>
            <CenteredLayout>
                <StarteredLayout>{children}</StarteredLayout>
            </CenteredLayout>
        </Container>
    );
};

export default StartedCenteredContainer;
