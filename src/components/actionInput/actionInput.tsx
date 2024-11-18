import { FC } from "react";
import { ActionInputWrapper } from "./actionInput.styled";
import Input from "../input/input";
import Button from "../button/button";
import { ActionInputProps } from "./actionInput.types";
import { useScreen } from "@/hooks/useScreen";

const ActionInput: FC<ActionInputProps> = ({
    buttonContent,
    placeholder,
    label,
    buttonColor,
    buttonClick,
}) => {
    const { isMobile } = useScreen(1024);

    return (
        <ActionInputWrapper>
            <Input
                label={label}
                placeholder={placeholder}
                showErrorMessage={false}
                bordered={false}
                size={isMobile ? "medium" : "large"}
                labelFont={isMobile ? "16px" : "24px"}
            />
            <Button
                customCssClass="flex"
                size={isMobile ? "regular" : "lg"}
                className="px-4 lg:px-5"
                radius={isMobile ? "40px" : "60px"}
                onClick={buttonClick}
                color={buttonColor ?? "primary"}
            >
                {buttonContent}
            </Button>
        </ActionInputWrapper>
    );
};

export default ActionInput;
