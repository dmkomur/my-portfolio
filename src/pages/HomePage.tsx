import React from "react";

import CenteredLayout from "@/components/CenteredLayout";
import StarteredLayout from "@/components/StarteredLayout";
import Container from "@/components/Container";
import Greetings from "@/components/Greetings/Greetings";
import Navigation from "@/components/Navigation/Navigation";

const HomePage: React.FC = () => {
    return (
        <Container>
            <CenteredLayout>
                <StarteredLayout>
                    <Greetings />
                    <Navigation />
                </StarteredLayout>
            </CenteredLayout>
        </Container>
    );
};
export default HomePage;
