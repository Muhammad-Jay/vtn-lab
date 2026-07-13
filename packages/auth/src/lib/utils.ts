

export function getClerkEnvironmentVariables() {
    const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
    const clerkSecretKey = process.env.CLERK_SECRET_KEY!;

    if (
        clerkSecretKey === null ||
        clerkSecretKey === undefined ||
        clerkPublishableKey === null ||
        clerkPublishableKey === undefined
    ) {
        throw new Error(`Missing environment variable.`);
    } else {
        return {
            clerkSecretKey,
            clerkPublishableKey,
        };
    }
}