import React from "react";
import { StyledText, StyledName, StyledGreetings } from "./Greetings.styled";
import { motion } from "framer-motion";

const Greetings: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div style={{ textAlign: "left" }}>
                <StyledGreetings>Helo, world!</StyledGreetings>
                <StyledText>
                    This.is ( my ) <code>=&gt;</code>
                </StyledText>
                <StyledName>Portfolio page</StyledName>
            </div>
        </motion.div>
    );
};
export default Greetings;
