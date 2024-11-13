import { useEffect, useState } from "react";

export const useUserHooks = () => {
    const [user, setUser] = useState(false);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setUserLoading(false);
        }, 1000);
    }, []);

    return {
        user,
        setUser,
        userLoading,
    };
};
