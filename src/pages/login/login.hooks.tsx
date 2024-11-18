import { useUser } from "@/hooks/useUser";
import { useValidator } from "@/hooks/useValidator";
import { userLogInSchema } from "@/schemas/authSchemas";
import { signInRequest } from "@/services/authService/authService";
import { SignInPayload } from "@/services/authService/authService.types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const useLogin = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useTranslation();

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useValidator({
        resolver: userLogInSchema,
    });

    const { setUser } = useUser();

    const { mutateAsync } = useMutation({
        mutationFn: (payload: SignInPayload) => signInRequest(payload),
    });

    const onSubmit = async (data: SignInPayload) => {
        const validData = userLogInSchema.safeParse(data);
        if (!validData.success) return;
        setIsSubmitting(true);
        const res = await mutateAsync(validData.data);
        setIsSubmitting(false);

        if (res.code === "success") {
            setUser(true);
            localStorage.setItem("singularity_user", res.data.token);
            reset();
            return;
        }

        toast(t("invalid_credentials"), { type: "error" });
    };

    return {
        onSubmit,
        register,
        handleSubmit,
        errors,
        isSubmitting,
        isValid,
    };
};

export default useLogin;
