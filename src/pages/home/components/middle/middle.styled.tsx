import {
    desktop,
    extraExtraLargeScreen,
    extraLargeScreen,
    tablet,
} from "@/styles/constants/sizes";
import styled from "styled-components";

export const MiddleWrapper = styled.div`
    padding-block: 80px;
    background-image: url("/static/blue-bg.svg");
    background-repeat: no-repeat;
    background-size: 200% 50%;
    background-position: 50% 46%;

    @media (width >= ${tablet}) {
        background-size: 100% 100%;
    }

    @media (width >= ${desktop}) {
        background-size: 100%;
        background-position: 0 0;
    }

    @media (width >= ${extraLargeScreen}) {
        padding-block: 200px 80px;
        margin-top: -80px;
    }

    @media (width >= ${extraExtraLargeScreen}) {
        margin-top: -40px;
        padding-top: 290px;
    }

    .content {
        width: 90%;
        margin-inline: auto;
        max-width: 400px;

        @media (width >= ${tablet}) {
            max-width: 500px;
        }

        @media (width >= ${desktop}) {
            max-width: unset;
        }
    }
`;
