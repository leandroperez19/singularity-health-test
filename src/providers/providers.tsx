import { FC, ReactNode } from "react";
import UserProvider from "./userProvider/userProvider";
import ThemesProvider from "./themeProvider/themeProvider";
import LayoutProvider from "./layoutProvider/layoutProvider";

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <UserProvider>
            <ThemesProvider>
                <LayoutProvider>{children}</LayoutProvider>
            </ThemesProvider>
        </UserProvider>
    );
};

type ProvidersProps = {
    children: ReactNode;
};

export default Providers;
