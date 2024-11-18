import Button from "@/components/button/button";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const Settings: FC = () => {
    const {
        t,
        i18n: { language, changeLanguage },
    } = useTranslation();

    return (
        <div className="flex-center-col gap-4 h-[100dvh]">
            <h2>{t("change_lang")}</h2>
            <h4>{language === "es" ? "Español" : "English"}</h4>
            <Button className="px-4" onClick={() => changeLanguage("en")}>
                EN
            </Button>
            <Button className="px-4" onClick={() => changeLanguage("es")}>
                ES
            </Button>
        </div>
    );
};

export default Settings;
