import React from "react";

import {
    StyledContactsHeader,
    StyledContactsSvgWrapper,
    StyledMailSvg,
    StyledLinkedSvg,
    StyledGitSvg,
    StyledContactsText,
} from "./Contacts.styled";

const Contacts: React.FC = () => {
    const textToCopy = "komur.d@gmail.com";
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            alert("Текст успешно скопирован! 📋");
        } catch (err) {
            console.error("Ошибка при копировании текста:", err);
        }
    };
    return (
        <>
            <StyledContactsText>
                I am a full-stack developer <br />
                familiar with the following technologies: <br />
                JS, TS, HTML + CSS, React, Node.js.
            </StyledContactsText>
            <StyledContactsHeader>Contacts:</StyledContactsHeader>
            <StyledContactsSvgWrapper>
                <StyledMailSvg onClick={handleCopy} />

                <a href="https://www.linkedin.com/in/dmytro-komurko-5075a8194/">
                    <StyledLinkedSvg />
                </a>
                <a href="https://github.com/dmkomur?tab=repositories">
                    <StyledGitSvg />
                </a>
            </StyledContactsSvgWrapper>
        </>
    );
};

export default Contacts;
