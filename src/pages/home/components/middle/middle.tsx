import { FC } from "react";
import { MiddleWrapper } from "./middle.styled";
import ServicesSection from "../servicesSection/servicesSection";
import Testimonials from "../testimonials/testimonials";

const Middle: FC = () => {
    return (
        <MiddleWrapper>
            <div className="content">
                <ServicesSection />
                <Testimonials />
            </div>
        </MiddleWrapper>
    );
};

export default Middle;
