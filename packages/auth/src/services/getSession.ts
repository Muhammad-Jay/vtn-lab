import {authClient} from "../lib/auth-client";

export async function getSession() {
    try {
        const { data, error } = await authClient.token();

        if (error || !data?.token) {
            return null;
        }

        return {
            accessToken: data.token // This is the signed asymmetric JWT string
        };
    } catch (error) {
        console.error("Failed to retrieve Better Auth token:", error);
        return null;
    }
}