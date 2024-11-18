import { FC } from "react";
import { SimpleCardWrapper } from "./simpleCard.styled";
import { SimpleCardProps } from "./simpleCard.types";
import Image from "../image/image";

const SimpleCard: FC<SimpleCardProps> = ({ image, text, className }) => {
    return (
        <SimpleCardWrapper className={className}>
            <Image src={image} alt="card_image" />
            <span className="block text">{text}</span>
        </SimpleCardWrapper>
    );
};

export default SimpleCard;
