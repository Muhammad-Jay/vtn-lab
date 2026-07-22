import { authClient } from "../lib/auth-client";
import { jwtDecode } from "jwt-decode";

interface SessionTokenResponse {
    accessToken: string;
}

interface JwtPayload {
    exp: number; // Expiration timestamp in seconds
}

export async function getSession(): Promise<SessionTokenResponse | null> {
    try {
        // 1. Attempt to grab the current token stored in memory/cookie state
        const { data, error } = await authClient.token();

        if (error || !data?.token) {
            // Fallback: If no token exists, attempt a soft session synchronization
            const syncResult = await authClient.getSession();
            if (syncResult?.error) return null;

            // Re-fetch token after a successful state synchronization
            const fallbackToken = await authClient.token();
            if (!fallbackToken.data?.token) return null;

            return { accessToken: fallbackToken.data.token };
        }

        // 2. Safely parse and examine JWT Expiration bounds
        const decoded = jwtDecode<JwtPayload>(data.token);

        // Convert current epoch time to seconds
        const currentTime = Math.floor(Date.now() / 1000);

        // Add a 10-second safety cushion buffer to prevent racing expiration on the wire
        const isExpiredOrExpiringSoon = decoded.exp - currentTime < 10;

        if (isExpiredOrExpiringSoon) {
            console.log(">>>>> Frontend JWT is expired/expiring soon. Triggering Better Auth session rotation...");

            // 3. Ping the Better Auth server route to evaluate the active Session Cookie
            const syncResult = await authClient.getSession();

            if (syncResult?.error) {
                console.error(">>>>> Better Auth session cookie has fully expired. User must log in again.");
                return null;
            }

            // Fetch the updated token issued by the renewed backend session state
            const renewedToken = await authClient.token();
            if (!renewedToken.data?.token) return null;

            return { accessToken: renewedToken.data.token };
        }

        return {
            accessToken: data.token
        };
    } catch (error) {
        console.error("Error evaluating or auto-refreshing Better Auth token:", error);
        return null;
    }
}
