import { useEffect, useState } from "react";

export const useUserHooks = () => {
    const [user, setUser] = useState(false);
    const [userLoading, setUserLoading] = useState(true);

    useEffect(() => {
        const foundUserToken = localStorage.getItem("singularity_user");

        setTimeout(() => {
            setUserLoading(false);
            if (foundUserToken) setUser(true);
        }, 1000);
    }, []);

    return {
        user,
        setUser,
        userLoading,
    };
};
