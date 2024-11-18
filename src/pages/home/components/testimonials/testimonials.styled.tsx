import styled from "styled-components";
import {
    desktop,
    extraExtraLargeScreen,
    extralarge,
    extraLargeScreen,
    large,
    medium,
    regular,
    smallTitle,
    tablet,
} from "@/styles/constants/sizes";
import { flex, square, truncateText } from "@/styles/mixins";

export const TestimonialsWrapper = styled.div`
    margin-top: 170px;

    @media (width >= ${desktop}) {
        margin-top: 240px;
    }

    @media (width >= ${extraExtraLargeScreen}) {
        margin-top: 320px;
        max-width: 1590px;
        margin-inline: auto;
    }

    .carousel-container {
        ${flex("center")};

        .prev-btn,
        .next-btn {
            position: absolute;
            z-index: 1;
        }

        .next-btn {
            right: 0;
        }

        .prev-btn {
            left: 0;
        }

        .swiper-slide {
            @media (width >= ${desktop}) {
                opacity: 0;
                transition: opacity 0.3s ease;

                &.swiper-slide-next {
                    .testimonial-card {
                        background-color: #4487ff;
                    }
                }

                &.swiper-slide-visible {
                    opacity: 1;
                }
            }

            .testimonial-card {
                border-radius: 12px;
                background-color: #f9593f;
                padding: 24px;
                color: ${({ theme }) => theme.palette.text.septenary};
                text-align: center;
                box-shadow: 0px 3px 6px #015f915d;
                min-height: 220px;
                background-image: url("/static/card-bg.jpg");
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-blend-mode: color-burn;

                @media (width >= ${tablet}) {
                    padding: 32px;
                    min-height: 285px;
                }

                @media (width >= ${extraLargeScreen}) {
                    padding: 40px;
                    min-height: 415px;
                }

                .pfp {
                    ${square("60px")}
                    background-color: #fff;
                    border-radius: 50%;
                    margin-inline: auto;
                    overflow: hidden;

                    @media (width >= ${tablet}) {
                        ${square("80px")}
                    }

                    @media (width >= ${extraLargeScreen}) {
                        ${square("108px")}
                    }
                }

                h6 {
                    font-size: ${medium};
                    font-weight: 500;
                    margin-top: 14px;

                    @media (width >= ${tablet}) {
                        margin-top: 16px;
                        font-size: ${large};
                    }

                    @media (width >= ${extraLargeScreen}) {
                        font-size: ${smallTitle};
                    }
                }

                p {
                    font-size: ${regular};
                    font-weight: 300;
                    margin-top: 14px;
                    ${truncateText(4)}

                    @media (width >= ${tablet}) {
                        margin-top: 16px;
                        font-size: ${medium};
                    }

                    @media (width >= ${desktop}) {
                        margin-top: 30px;
                        font-size: ${extralarge};
                    }
                }
            }
        }
    }
`;
