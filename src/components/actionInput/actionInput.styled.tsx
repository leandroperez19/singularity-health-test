import { desktop } from "@/styles/constants/sizes";
import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const ActionInputWrapper = styled.div`
    ${flex("center")}
    box-shadow: 0px 3px 6px #00000029;
    padding: 8px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.box.background};

    @media (width >= ${desktop}) {
        padding-block: 10px;
    }
`;
