import {
    desktop,
    extraExtraLargeScreen,
    tablet,
} from "@/styles/constants/sizes";
import { flex, flexCenter, square } from "@/styles/mixins";
import styled from "styled-components";

export const BottomCardWrapper = styled.div`
    width: 90%;
    margin-inline: auto;
    padding-block: 60px;
    max-width: 400px;

    @media (width >= ${tablet}) {
        max-width: 500px;
    }

    @media (width >= ${desktop}) {
        ${flex("flex-start", "space-between")}
        max-width: 1360px;
    }

    .card {
        background-color: #4487ff;
        border-radius: 12px;
        padding: 24px;
        ${flex("center", "center", "column")}
        gap: 24px;
        background-image: url("/src/assets/static/card-bg.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-blend-mode: color-burn;

        @media (width >= ${desktop}) {
            ${flex("flex-start", "flex-start", "row")}
            padding: 40px;
        }

        @media (width >= ${extraExtraLargeScreen}) {
            gap: 40px;
        }

        .dog-container {
            border-radius: 50%;
            ${square("180px")}
            position: relative;
            margin-inline: auto;
            ${flexCenter()}
            overflow: hidden;
            margin-top: 16px;

            @media (width >= ${desktop}) {
                ${square("240px")}
            }

            @media (width >= ${extraExtraLargeScreen}) {
                ${square("350px")}
            }

            .circle {
                position: absolute;
                ${square("160px")}
                background-color: ${({ theme }) => theme.palette.common.yellow};
                border-radius: 50%;
                bottom: -2px;

                @media (width >= ${desktop}) {
                    ${square("220px")}
                }

                @media (width >= ${extraExtraLargeScreen}) {
                    ${square("335px")}
                }
            }

            img {
                z-index: 1;
                position: absolute;
                bottom: -15px;
                height: 180px;

                @media (width >= ${desktop}) {
                    height: 240px;
                }

                @media (width >= ${extraExtraLargeScreen}) {
                    height: 350px;
                    bottom: -25px;
                }
            }
        }

        .text {
            max-width: 910px;

            p {
                @media (width >= ${extraExtraLargeScreen}) {
                    line-height: 1.4;
                }
            }
        }
    }
`;
