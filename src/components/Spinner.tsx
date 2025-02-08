import React from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
`;

const Square = styled.rect<{ delay: number }>`
    fill: white;
    animation: ${blink} 5s infinite;
    animation-delay: ${({ delay }) => delay}s;
`;

const SvgContainer = styled.svg`
    width: 200px;
    height: 40px;
`;

const Spinner: React.FC = () => {
    return (
        <SpinnerWrapper>
            <SvgContainer
                viewBox="0 0 50 10"
                xmlns="http://www.w3.org/2000/svg"
            >
                {[...Array(10)].map((_, i) => (
                    <Square
                        key={i}
                        x={i * 5}
                        y={3}
                        width={4}
                        height={4}
                        delay={i * 0.5}
                    />
                ))}
            </SvgContainer>
        </SpinnerWrapper>
    );
};

export default Spinner;
