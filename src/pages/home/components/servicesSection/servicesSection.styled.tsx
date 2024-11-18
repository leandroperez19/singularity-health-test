import { desktop } from "@/styles/constants/sizes";
import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const ServicesSectionWrapper = styled.div`
    @media (width >= ${desktop}) {
        ${flex("flex-start", "space-between")}
        gap: 16px;
        max-width: 1360px;
        margin-inline: auto;
    }
`;
