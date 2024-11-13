import { createContext, Dispatch, SetStateAction } from "react";

const UserContext = createContext<UserContextProps | null>(null);

export type UserContextProps = {
    user: boolean;
    setUser: Dispatch<SetStateAction<boolean>>;
    userLoading: boolean;
};

export default UserContext;
