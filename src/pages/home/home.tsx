import { FC } from "react";
import { HomeWrapper } from "./home.styled";
import Default from "@/layout/default/default";
import Header from "./components/header/header";
import Middle from "./components/middle/middle";
import Bottom from "./components/bottom/bottom";
import BottomCard from "./components/bottomCard/bottomCard";
import { HomeProps } from "./home.types";

const Home: FC<HomeProps> = ({
    headerParagraphKey = "main_paragraph",
    headerTitleKey = "main_title",
}) => {
    return (
        <Default>
            <HomeWrapper>
                <Header
                    titleKey={headerTitleKey}
                    paragraphKey={headerParagraphKey}
                />
                <Middle />
                <Bottom />
                <BottomCard />
            </HomeWrapper>
        </Default>
    );
};

export default Home;
