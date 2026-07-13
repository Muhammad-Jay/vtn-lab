import { SignIn } from '@clerk/nextjs';

/**
 * PremiumAuth Component
 *
 * A unified authentication component handling both Sign In and Sign Up flows.
 * Configured with a modern, premium appearance utilizing CSS variables for
 * seamless integration with your application's design system.
 */
export function AuthComponent() {
    return (
        <SignIn
            // Opts into the unified sign-in-or-up flow
            withSignUp={true}

            appearance={{
                // Adjusts the layout and behavior of the component
                options: {
                    animations: true,
                    socialButtonsPlacement: 'bottom',
                    socialButtonsVariant: 'blockButton',
                    autoFocus: true,
                },

                // Adjusts the general styles of the component's base theme
                variables: {
                    // Utilizing CSS variables for robust light/dark mode support
                    colorPrimary: 'var(--brand-primary, #0f172a)',
                    colorForeground: 'var(--brand-foreground, #0f172a)',
                    colorBackground: 'var(--brand-background, #ffffff)',
                    colorInputForeground: 'var(--brand-foreground, #0f172a)',
                    colorInput: 'transparent',
                    colorBorder: 'var(--brand-border, #e2e8f0)',
                    colorRing: 'var(--brand-ring, #94a3b8)',
                    colorShadow: 'var(--brand-shadow, rgba(0, 0, 0, 0.05))',

                    // Modern typography and geometry
                    fontFamily: 'inherit',
                    borderRadius: '0.75rem',
                    spacing: '1rem',
                    fontWeight: {
                        normal: 400,
                        medium: 500,
                        semibold: 600,
                        bold: 700
                    }
                },

                // Customizes the appearance of the CAPTCHA widget
                captcha: {
                    theme: 'auto',
                    size: 'flexible',
                }
            }}
        />
    );
}