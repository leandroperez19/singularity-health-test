import { desktop } from "@/styles/constants/sizes";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
    padding: 56px 24px;
    margin-top: 80px;
    position: relative;
    background-color: #ff6752;

    @media (width >= ${desktop}) {
        padding: 64px 36px;
    }
`;
