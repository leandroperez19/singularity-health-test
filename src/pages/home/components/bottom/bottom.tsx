import { FC } from "react";
import { BottomWrapper } from "./bottom.styled";
import { cards } from "./data";
import SimpleCard from "@/components/simpleCard/simpleCard";
import { useTranslation } from "react-i18next";
import ActionInput from "@/components/actionInput/actionInput";
import { FaArrowRightLong } from "@/assets/icons";

const Bottom: FC = () => {
    const { t } = useTranslation();

    return (
        <BottomWrapper>
            <div className="content">
                <div className="top-left cards">
                    {cards.map((card, i) => (
                        <SimpleCard
                            key={card.i18nKey}
                            text={t(card.i18nKey)}
                            image={card.image}
                            className={i === 1 ? "middle-card" : "normal-card"}
                        />
                    ))}
                </div>
                <div className="bottom-right mt-10 lg:mt-0">
                    <h3 className="font-bold text-fifthly text-[24px] md:text-[32px] lg:text-[40px] xxlScreen:text-[48px]">
                        {t("how_it_works")}
                    </h3>
                    <p className="mt-4 text-senary text-sm max-w-[400px] opacity-[0.8] md:text-base lg:text-lg xxlScreen:text-[24px] xlScreen:max-w-[645px] xxlScreen:mt-[40px]">
                        {t("finding_paragraph")}
                    </p>
                    <h5 className="font-bold text-sm text-fifthly mt-[24px] md:text-base lg:text-lg xxlScreen:text-[24px] xxlScreen:mt-[40px]">
                        {t("enter_location")}
                    </h5>
                    <div className="action-input mt-6 lg:max-w-[290px]">
                        <ActionInput
                            buttonContent={<FaArrowRightLong />}
                            placeholder={t("zip_code")}
                            buttonColor="secondary"
                        />
                    </div>
                </div>
            </div>
        </BottomWrapper>
    );
};

export default Bottom;
