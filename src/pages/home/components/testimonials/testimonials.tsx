import { FC } from "react";
import { TestimonialsWrapper } from "./testimonials.styled";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "./data";
import Button from "@/components/button/button";
import { FaArrowLeftLong, FaArrowRightLong } from "@/assets/icons";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { useScreen } from "@/hooks/useScreen";
import pfp from "@/assets/static/pfp.webp";
import Image from "@/components/image/image";

const Testimonials: FC = () => {
    const { t } = useTranslation();
    const { isMobile } = useScreen(1200);

    return (
        <TestimonialsWrapper>
            <h3 className="font-bold text-center max-w-[650px] mx-auto text-fifthly text-[24px] md:text-[32px] lg:text-[40px] xxlScreen:text-[48px]">
                {t("testimonials_title")}
            </h3>
            <div className="carousel-container mt-[48px] relative xxlScreen:mt-[85px]">
                <Swiper
                    direction="horizontal"
                    slidesPerView={1}
                    freeMode
                    grabCursor
                    navigation={{
                        nextEl: ".carousel-next",
                        prevEl: ".carousel-prev",
                    }}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 220,
                        modifier: 1,
                        slideShadows: false,
                        scale: 0.85,
                    }}
                    modules={[Navigation, EffectCoverflow]}
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    slideActiveClass="active"
                >
                    {testimonials.map((testimonial, i) => (
                        <SwiperSlide className="px-6 py-2 lg:px-0" key={i}>
                            <div className="testimonial-card">
                                <div className="pfp">
                                    <Image src={pfp} alt="pfp" />
                                </div>
                                <h6>{testimonial.name}</h6>
                                <p>{testimonial.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Button
                    size={isMobile ? "sm" : "lg"}
                    className="px-3 carousel-prev xlScreen:w-[60px] xlScreen:flex xlScreen:items-center xlScreen:justify-center"
                    color="secondary"
                    radius="50%"
                    customCssClass="prev-btn"
                >
                    <FaArrowLeftLong />
                </Button>
                <Button
                    size={isMobile ? "sm" : "lg"}
                    color="secondary"
                    className="px-3 carousel-next xlScreen:w-[60px] xlScreen:flex xlScreen:items-center xlScreen:justify-center"
                    radius="50%"
                    customCssClass="next-btn"
                >
                    <FaArrowRightLong />
                </Button>
            </div>
        </TestimonialsWrapper>
    );
};

export default Testimonials;
