import { DefaultTheme } from "styled-components";
import colors from "@styles/constants/colors";

const lightTheme: DefaultTheme = {
    type: "light",
    palette: {
        text: {
            primary: colors.singularityRed,
            secondary: colors.singularityLightGray,
            tertiary: colors.singularityGray,
            quaternary: colors.singularityColdBlue,
            fifthly: colors.singularityOrangeRed,
            senary: colors.singularityDarkGray,
            septenary: colors.singularityAlmostWhite,
            accent: colors.singularityYellow,
            danger: colors.white,
        },
        common: {
            white: colors.white,
            black: colors.black,
            yellow: colors.singularityYellow,
        },
        page: {
            primaryBorder: colors.softGray,
            bodyColor: colors.singularityVeryLightBlue,
            scrollbarBg: colors.singularityTranslucentBlue,
            scrollbarThumb: colors.singularityBlue,
        },
    },
    input: {
        primary: {
            borderColor: colors.opaqueGray,
            background: colors.transparent,
            color: colors.black,
            borderOnFocus: colors.black,
            labelColor: colors.singularityLightGray,
            labelColorFocus: colors.opaqueGray,
            dangerColor: colors.red,
        },
    },
    button: {
        primary: {
            background: colors.singularityBlue,
            color: colors.singularityAlmostWhite,
            hoverColor: colors.singularityAlmostWhite,
            hoverBackground: colors.singularityBlue,
            focusColor: colors.singularityAlmostWhite,
            focusBackground: colors.singularityBlue,
            borderColor: colors.singularityBlue,
            shadowColor: colors.singularityTranslucentBlue,
        },
        secondary: {
            background: colors.singularityOrangeRed,
            color: colors.white,
            hoverColor: colors.white,
            hoverBackground: colors.singularityOrangeRed,
            focusColor: colors.white,
            focusBackground: colors.singularityOrangeRed,
            borderColor: colors.singularityOrangeRed,
            shadowColor: colors.singularityTranslucentRed,
        },
        tertiary: {
            background: colors.white,
            color: colors.singularityOrangeRed,
            hoverColor: colors.singularityOrangeRed,
            hoverBackground: colors.lightBlueGray,
            focusColor: colors.singularityRed,
            focusBackground: colors.lightBlueGray,
            borderColor: colors.lightBlueGray,
            shadowColor: colors.transparent,
        },
        transparent: {
            background: colors.transparent,
            color: colors.black,
            hoverColor: colors.black,
            hoverBackground: colors.singularityLightTransparent,
            focusColor: colors.black,
            focusBackground: colors.singularityLightTransparent,
            borderColor: colors.transparent,
            shadowColor: colors.shadow,
        },
    },
    navbar: {
        backgroundColor: colors.singularityRed,
    },
    sidebar: {
        backgroundColor: colors.white,
        sectionColor: colors.almostBlack,
        sectionBgHover: colors.lightBlueGray,
    },

    box: {
        background: colors.white,
        color: colors.singularityDarkerGray,
    },
};

export default lightTheme;
