// "use client";
//
// import { useCallback, useState } from "react";
//
// import {
//     useSignIn,
//     useSignUp,
// } from "@clerk/nextjs";
//
// export type OAuthProvider =
//     | "oauth_google"
//     | "oauth_github";
//
// export interface UseClerkAuthResult {
//
//     isLoaded: boolean;
//
//     isLoading: boolean;
//
//     error: string | null;
//
//     clearError(): void;
//
//     handleOAuthSignIn(
//         provider: OAuthProvider,
//     ): Promise<void>;
//
// }
//
// export function useOAuth(): UseClerkAuthResult {
//
//     const {
//         signIn,
//         isLoaded: isSignInLoaded,
//     } = useSignIn();
//
//     const {
//         signUp,
//         isLoaded: isSignUpLoaded,
//     } = useSignUp();
//
//     const [isLoading, setIsLoading] =
//         useState(false);
//
//     const [error, setError] =
//         useState<string | null>(null);
//
//     const clearError = useCallback(() => {
//
//         setError(null);
//
//     }, []);
//
//     const handleOAuthSignIn =
//         useCallback(
//             async (
//                 provider: OAuthProvider,
//             ): Promise<void> => {
//
//                 if (
//                     !isSignInLoaded ||
//                     !isSignUpLoaded
//                 ) {
//                     return;
//                 }
//
//                 try {
//
//                     setIsLoading(true);
//
//                     setError(null);
//
//                     await signIn.authenticateWithRedirect({
//
//                         strategy: provider,
//
//                         redirectUrl:
//                             "/sign-up/sso-callback",
//
//                         redirectUrlComplete:
//                             "/",
//
//                     });
//
//                 } catch (error: unknown) {
//
//                     const clerkError =
//                         error as {
//
//                             message?: string;
//
//                             errors?: Array<{
//                                 code?: string;
//                                 message?: string;
//                             }>;
//
//                         };
//
//                     const code =
//                         clerkError.errors?.[0]?.code;
//
//                     if (
//                         code ===
//                         "form_identifier_not_found"
//                     ) {
//
//                         try {
//
//                             await signUp.authenticateWithRedirect({
//
//                                 strategy: provider,
//
//                                 redirectUrl:
//                                     "/sign-up/sso-callback",
//
//                                 redirectUrlComplete:
//                                     "/",
//
//                             });
//
//                             return;
//
//                         } catch (signUpError: unknown) {
//
//                             const clerkSignUpError =
//                                 signUpError as {
//
//                                     message?: string;
//
//                                     errors?: Array<{
//                                         message?: string;
//                                     }>;
//
//                                 };
//
//                             setError(
//
//                                 clerkSignUpError.errors?.[0]?.message ??
//                                 clerkSignUpError.message ??
//                                 "An error occurred during registration.",
//
//                             );
//
//                         }
//
//                     } else {
//
//                         setError(
//
//                             clerkError.errors?.[0]?.message ??
//                             clerkError.message ??
//                             "An error occurred during sign in.",
//
//                         );
//
//                     }
//
//                 } finally {
//
//                     setIsLoading(false);
//
//                 }
//
//             },
//             [
//                 isSignInLoaded,
//                 isSignUpLoaded,
//                 signIn,
//                 signUp,
//             ],
//         );
//
//     return {
//
//         isLoaded:
//             isSignInLoaded &&
//             isSignUpLoaded,
//
//         isLoading,
//
//         error,
//
//         clearError,
//
//         handleOAuthSignIn,
//
//     };
//
// }