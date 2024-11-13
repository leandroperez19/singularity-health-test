import { FC, ReactNode } from "react";
import UserProvider from "./userProvider/userProvider";

const Providers: FC<ProvidersProps> = ({ children }) => {
    return <UserProvider>{children}</UserProvider>;
};

type ProvidersProps = {
    children: ReactNode;
};

export default Providers;
