import { FC } from "react";
import { BottomCardWrapper } from "./bottomCard.styled";
import Image from "@/components/image/image";
import smilingDog from "@/assets/static/smiling-dog.png";
import { useTranslation } from "react-i18next";
import Button from "@/components/button/button";
import { useScreen } from "@/hooks/useScreen";

const BottomCard: FC = () => {
    const { t } = useTranslation();
    const { isMobile } = useScreen(1024);

    return (
        <BottomCardWrapper>
            <div className="card">
                <div className="left-top">
                    <div className="dog-container">
                        <div className="circle" />
                        <Image src={smilingDog} alt="smiling_dog" />
                    </div>
                </div>
                <div className="text text-center lg:text-left">
                    <h4 className="text-[24px] text-accent font-bold lg:text-[32px] xxlScreen:text-[48px]">
                        {t("make_it")}
                    </h4>
                    <p className="mt-6 text-septenary font-light lg:text-lg xxlScreen:text-[32px]">
                        {t("make_it_paragraph")}
                    </p>
                    <Button
                        className="px-8 mt-6 font-semibold lg:text-[20px] lg:mt-8"
                        radius="40px"
                        color="tertiary"
                        size={isMobile ? "regular" : "lg"}
                    >
                        {t("join_now")}
                    </Button>
                </div>
            </div>
        </BottomCardWrapper>
    );
};

export default BottomCard;
