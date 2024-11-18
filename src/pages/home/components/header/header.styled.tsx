import styled from "styled-components";
import {
    desktop,
    extraExtraLargeScreen,
    extraLargeScreen,
    tablet,
} from "@/styles/constants/sizes";
import { flex, flexCenter, square } from "@/styles/mixins";

export const HeaderWrapper = styled.div`
    padding-block: 80px 40px;
    background-image: url("/static/full-horizontal-red-bg.PNG");
    background-repeat: no-repeat;
    background-size: 280% 100%;

    @media (width >= ${desktop}) {
        padding-block: 200px 80px;
        background-size: 130% 100%;
    }

    @media (width >= ${extraLargeScreen}) {
        background-size: 120% 100%;
    }

    @media (width >= ${extraExtraLargeScreen}) {
        background-size: 100% 100%;
        padding-block: 210px 280px;
    }

    .content {
        width: 90%;
        margin-inline: auto;
        max-width: 400px;

        @media (width >= ${tablet}) {
            max-width: 500px;
        }

        @media (width >= ${desktop}) {
            ${flex("center", "space-between")}
            max-width: unset;
        }

        @media (width >= ${extraExtraLargeScreen}) {
            max-width: 1640px;
        }

        .top-right {
            @media (width >= ${desktop}) {
                flex-basis: 50%;
            }

            @media (width >= ${extraExtraLargeScreen}) {
                flex-basis: 45%;
            }
        }

        .bottom-left {
            border-radius: 50%;
            ${square("320px")}
            position: relative;
            margin-inline: auto;
            ${flexCenter()}
            overflow: hidden;
            margin-top: 16px;

            @media (width >= ${desktop}) {
                margin-inline: unset;
                ${square("390px")}
            }

            @media (width >= ${extraLargeScreen}) {
                ${square("460px")}
            }

            @media (width >= ${extraExtraLargeScreen}) {
                ${square("600px")}
            }

            .circle {
                position: absolute;
                ${square("290px")}
                background-color: ${({ theme }) => theme.palette.common.yellow};
                border-radius: 50%;
                bottom: -2px;

                @media (width >= ${desktop}) {
                    ${square("360px")}
                    bottom: -4px;
                }

                @media (width >= ${extraLargeScreen}) {
                    ${square("400px")}
                }

                @media (width >= ${extraExtraLargeScreen}) {
                    ${square("546px")}
                }
            }

            img {
                z-index: 1;
                position: absolute;
                bottom: -95px;
                height: 420px;
                width: 195px;

                @media (width >= ${desktop}) {
                    height: 485px;
                    width: auto;
                }

                @media (width >= ${extraLargeScreen}) {
                    height: 550px;
                    margin-left: -21px;
                }

                @media (width >= ${extraExtraLargeScreen}) {
                    height: 690px;
                }
            }
        }
    }
`;
