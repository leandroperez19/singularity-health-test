import { FC } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/components/button/button";
import goldenRetriever from "@/assets/static/golden_retriever.png";
import Image from "@/components/image/image";
import { useScreen } from "@/hooks/useScreen";
import { HeaderWrapper } from "./header.styled";
import { HeaderProps } from "./header.types";

const Header: FC<HeaderProps> = ({ titleKey, paragraphKey }) => {
    const { t } = useTranslation();
    const { isMobile } = useScreen(1024);

    return (
        <HeaderWrapper>
            <div className="content">
                <div className="top-right text-white text-center lg:text-left">
                    <h1 className="text-[32px] font-semibold md:text-[44px] lg:text-[52px] xlScreen:text-[84px]">
                        {t(titleKey)}
                    </h1>
                    <p className="mt-4 text-sm md:text-base lg:mt-6 lg:text-lg xxlScreen:mt-[36px] xxlScreen:text-[24px]">
                        {t(paragraphKey)}
                    </p>
                    <div className="actions flex flex-col items-center gap-3 mt-4 lg:flex-row lg:mt-6 xxlScreen:gap-10 xxlScreen:mt-[40px]">
                        <Button
                            className="px-5 text-semibold text-sm md:text-base xxlScreen:px-10 xxlScreen:text-[20px] xxlScreen:font-bold"
                            radius="38px"
                            size={isMobile ? "regular" : "xl"}
                            shadow
                        >
                            {t("schedule_service")}
                        </Button>
                        <span className="block text-white text-xs md:text-sm lg:text-base xxlScreen:text-[20px]">
                            {t("or_call", { phone: "866.338.2463" })}
                        </span>
                    </div>
                </div>
                <div className="bottom-left">
                    <Image src={goldenRetriever} alt="golden_retriever" />
                    <div className="circle" />
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
