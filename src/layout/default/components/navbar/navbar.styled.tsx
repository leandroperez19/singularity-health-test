import { desktop } from "@/styles/constants/sizes";
import { flex, flexCenter, square } from "@/styles/mixins";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    height: 80px;
    width: 100%;
    background-color: ${({ theme }) => theme.navbar.backgroundColor};
    position: fixed;
    ${flex("center")}
    z-index: 1500;

    &.navbar-transparent {
        background-color: transparent;
    }

    @media (width >= ${desktop}) {
        height: 132px;
    }

    .content {
        width: 90%;
        margin-inline: auto;
        max-width: 1920px;

        ${flex("center", "space-between")}

        .left {
            .logo-container {
                background-color: white;
                ${square("56px")};
                border-radius: 50%;
                ${flexCenter()};
                padding: 8px;

                @media (width >= ${desktop}) {
                    ${square("78px")}
                    padding: 16px;
                }
            }
        }
    }
`;
