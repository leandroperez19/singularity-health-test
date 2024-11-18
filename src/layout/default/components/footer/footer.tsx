import { FC } from "react";
import { FooterWrapper } from "./footer.styled";
import { useScreen } from "@/hooks/useScreen";
import Expandable from "@/components/expandable/expandable";
import { footerSections } from "./sections";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ActionInput from "@/components/actionInput/actionInput";
import { FaArrowRightLong } from "@/assets/icons";

const MobileContent: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="mobile-content max-w-[500px] mx-auto">
            <div className="sections grid gap-8">
                {footerSections.map((section) => (
                    <Expandable
                        title={t(section.i18nKey)}
                        key={section.i18nKey}
                    >
                        <div className="links grid gap-4 py-2 text-septenary font-light text-sm md:text-lg">
                            {section.links.map((link) => (
                                <Link to={link.route} key={link.i18nKey}>
                                    {t(link.i18nKey)}
                                </Link>
                            ))}
                        </div>
                    </Expandable>
                ))}
            </div>
            <div className="">
                <h3 className="font-bold text-accent text-[24px] md:text-[32px] lg:text-[40px] xxlScreen:text-[48px]">
                    {t("newsletter")}
                </h3>
                <p className="mt-4 text-septenary text-sm opacity-[0.8] md:text-base lg:text-lg xxlScreen:text-[24px] xlScreen:max-w-[365px] xxlScreen:mt-[40px]">
                    {t("newsletter_paragraph")}
                </p>
                <div className="action-input mt-6 lg:max-w-[290px]">
                    <ActionInput
                        buttonContent={<FaArrowRightLong />}
                        placeholder={t("email_address")}
                        buttonColor="secondary"
                    />
                </div>
            </div>
        </div>
    );
};

const DesktopContent: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="desktop-content flex justify-between items-start mx-auto max-w-[1645px]">
            {footerSections.map((section) => (
                <div className="section">
                    <h5 className="text-[24px] text-accent font-bold">
                        {t(section.i18nKey)}
                    </h5>
                    <div className="links grid gap-4 py-6 text-white font-light text-md xlScreen:text-lg xxlScreen:text-[24px]">
                        {section.links.map((link) => (
                            <Link to={link.route} key={link.i18nKey}>
                                {t(link.i18nKey)}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
            <div>
                <h3 className="font-bold text-accent text-[24px]">
                    {t("newsletter")}
                </h3>
                <p className="mt-4 text-white font-light text-md xlScreen:text-lg xxlScreen:text-[24px]">
                    {t("newsletter_paragraph")}
                </p>
                <div className="action-input mt-6">
                    <ActionInput
                        buttonContent={<FaArrowRightLong />}
                        placeholder={t("email_address")}
                        buttonColor="secondary"
                    />
                </div>
            </div>
        </div>
    );
};

const Footer: FC = () => {
    const { isMobile } = useScreen(1024);

    return (
        <FooterWrapper>
            {isMobile ? <MobileContent /> : <DesktopContent />}
        </FooterWrapper>
    );
};

export default Footer;
