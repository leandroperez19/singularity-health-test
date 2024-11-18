import { FC } from "react";
import { SidebarWrapper } from "./sidebar.styled";
import useLayout from "@/hooks/useLayout";
import { sections } from "../../sections";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar: FC = () => {
    const { sidebarRef, sidebarToggle } = useLayout();
    const { t } = useTranslation();

    return (
        <SidebarWrapper ref={sidebarRef}>
            <div className="sidebar" role="navigation">
                <div className="sections grid gap-4 mt-5">
                    {sections.map((section) => (
                        <div className="section" key={section.i18nKey}>
                            <Link to="">{t(section.i18nKey)}</Link>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="background-touchable"
                role="presentation"
                onClick={sidebarToggle}
            />
        </SidebarWrapper>
    );
};

export default Sidebar;
