import { desktop, extraLargeScreen, tablet } from "@/styles/constants/sizes";
import { flex } from "@/styles/mixins";
import styled from "styled-components";

export const BottomWrapper = styled.div`
    padding-block: 40px 120px;
    position: relative;

    @media (width >= ${tablet}) {
        padding-block: 80px;
    }

    @media (width >= ${desktop}) {
        padding-block: 120px;
    }

    @media (width >= ${extraLargeScreen}) {
        padding-block: 210px;
    }

    &::after,
    &::before {
        content: "";
        background-size: 100% 100%;
        position: absolute;
        background-repeat: no-repeat;
        z-index: -3;
    }

    &::after {
        width: 150px;
        height: 300px;
        top: -70px;
        right: 0;
        background-image: url("/static/yellow-circle.png");
        background-position: 0 0;

        @media (width >= ${tablet}) {
            width: 50%;
            height: 80%;
        }

        @media (width >= ${desktop}) {
            height: 100%;
            max-width: 650px;
        }
    }

    &::before {
        width: 100px;
        height: 200px;
        bottom: -70px;
        left: 0;
        background-image: url("/static/yellow-circle-flipped.png");

        @media (width >= ${tablet}) {
            width: 150px;
            height: 300px;
        }
    }

    .content {
        width: 90%;
        margin-inline: auto;
        max-width: 400px;

        @media (width >= ${tablet}) {
            max-width: 500px;
        }

        @media (width >= ${desktop}) {
            ${flex("flex-start", "space-between")}
            gap: 16px;
            max-width: 1360px;
            margin-inline: auto;
        }

        .cards {
            max-width: 250px;
            margin-inline: auto;
            position: relative;
            display: grid;
            gap: 64px;

            @media (width >= ${extraLargeScreen}) {
                ${flex("flex-start", "space-between", "column")}
                margin-inline: 0;
                max-width: unset;
                width: 45%;
                position: relative;
                height: 760px;

                .middle-card {
                    position: absolute;
                    right: 0;
                    top: calc(50% - 125px);
                }
            }

            &:nth-child(2) {
                align-self: flex-end;
            }

            &::before {
                z-index: -2;
                content: "";
                position: absolute;
                top: 0;
                width: 1px;
                height: 100%;
                left: calc(50% - 0.5px);
                border-left: 7px dashed
                    ${({ theme }) => theme.palette.text.primary};

                @media (width >= ${extraLargeScreen}) {
                    left: 0;
                    width: 80%;
                    height: 80%;
                    top: 10%;
                    border-radius: 50%;
                    border-left: unset;
                    border-right: 7px dashed
                        ${({ theme }) => theme.palette.text.primary};
                    border-top: 7px dashed
                        ${({ theme }) => theme.palette.text.primary};
                    border-bottom: 7px dashed
                        ${({ theme }) => theme.palette.text.primary};
                }
            }

            &::after {
                @media (width >= ${extraLargeScreen}) {
                    z-index: -1;
                    content: "";
                    background-color: ${({ theme }) =>
                        theme.palette.page.bodyColor};
                    width: 20%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    position: absolute;
                }
            }
        }
    }
`;
