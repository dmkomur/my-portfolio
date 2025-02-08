import React from "react";
import { StyledText, StyledName, StyledGreetings } from "./Greetings.styled";

const Greetings: React.FC = () => {
    return (
        <div style={{ textAlign: "left" }}>
            <StyledGreetings>Helo, world!</StyledGreetings>
            <StyledText>
                This.is ( my ) <code>=&gt;</code>
            </StyledText>
            <StyledName>Portfolio page</StyledName>
        </div>
    );
};
export default Greetings;
