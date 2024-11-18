import { FC } from "react";
import { useTranslation } from "react-i18next";
import ActionInput from "@/components/actionInput/actionInput";
import { FaArrowRightLong } from "@/assets/icons";
import SimpleCard from "@/components/simpleCard/simpleCard";
import { ServicesSectionWrapper } from "./servicesSection.styled";
import { services } from "./services";

const ServicesSection: FC = () => {
    const { t } = useTranslation();

    return (
        <ServicesSectionWrapper>
            <div className="top-left">
                <h3 className="font-bold text-fifthly text-[24px] md:text-[32px] lg:text-[40px] xxlScreen:text-[48px]">
                    {t("our_services")}
                </h3>
                <p className="mt-4 text-senary text-sm opacity-[0.8] md:text-base lg:text-lg xxlScreen:text-[24px] xlScreen:max-w-[365px] xxlScreen:mt-[40px]">
                    {t("our_services_paragraph")}
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
            <div className="bottom-right cards grid gap-3 grid-cols-2 mt-10 lg:mt-0">
                {services.map((service) => (
                    <SimpleCard
                        image={service.image}
                        text={t(service.i18nKey)}
                        key={service.i18nKey}
                    />
                ))}
            </div>
        </ServicesSectionWrapper>
    );
};

export default ServicesSection;
