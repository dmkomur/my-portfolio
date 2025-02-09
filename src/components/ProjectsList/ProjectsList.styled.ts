import styled from "styled-components";

import breakpoints from "@/tools/breakpoints";

export const StyledProjectsListWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    height: 280px;
    overflow-y: auto;
    padding-bottom: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px 0px;

    /* Скрываем скроллбар на мобильных */
    -ms-overflow-style: none; /* IE и Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome и Safari */
    }
    @media (min-width: ${breakpoints.tablet}) {
        height: 320px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        height: 360px;
    }
`;
