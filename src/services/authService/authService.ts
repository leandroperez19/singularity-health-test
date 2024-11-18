import { doPost } from "../requestHandler";
import {
    SignInPayload,
    signInResponse,
    signInResponseSchema,
} from "./authService.types";

export const signInRequest = async (payload: SignInPayload) => {
    return await doPost<signInResponse>(
        "/login",
        payload,
        signInResponseSchema.parse
    );
};
