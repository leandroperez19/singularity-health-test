import { ReactNode } from "react";

export type ActionInputProps = {
    buttonContent: ReactNode | string;
    placeholder?: string;
    label?: string;
    buttonClick?: () => void;
    buttonColor?: "primary" | "secondary";
};
