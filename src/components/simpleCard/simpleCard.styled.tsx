import {
    extraExtraLargeScreen,
    extralarge,
    extraLargeScreen,
    large,
    largeplus,
    regular,
    tablet,
} from "@/styles/constants/sizes";
import { flexCenter } from "@/styles/mixins";
import styled from "styled-components";

export const SimpleCardWrapper = styled.div`
    min-height: 120px;
    min-width: 100px;
    background-color: ${({ theme }) => theme.box.background};
    box-shadow: 0px 3px 6px #00000029;
    ${flexCenter("column")};
    gap: 10px;
    border-radius: 20px;

    @media (width >= ${tablet}) {
        min-height: 200px;
        min-width: 200px;
        gap: 40px;
    }

    @media (width >= ${extraLargeScreen}) {
        min-height: 250px;
        min-width: 250px;
    }

    img {
        height: 50px;

        @media (width >= ${tablet}) {
            height: 80px;
        }
    }

    .text {
        color: ${({ theme }) => theme.box.color};
        font-size: ${regular};

        @media (width >= ${tablet}) {
            font-size: ${large};
        }

        @media (width >= ${extraLargeScreen}) {
            font-size: ${largeplus};
        }

        @media (width >= ${extraExtraLargeScreen}) {
            font-size: ${extralarge};
        }
    }
`;
