"use client";

import { Container } from "@repo/ui/views";

export function Loader() {
    return (
        <Container
            surface="surface-1"
            width="screen"
            height="screen"
            align="center"
            justify="center"
            direction="column"
            overflow="hidden"
            border="none"
            radius="none"
            margin="none"
            padding="none"
        >
            <svg
                width="140"
                height="140"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-[0_0_12px_rgba(255,255,255,0.05)]" // Adds a subtle ambient glow
            >
                <defs>
                    <linearGradient id="silver-pulse" x1="0%" y1="50%" x2="100%" y2="50%">
                        {/* Dark base color blending into the background */}
                        <stop offset="0%" stopColor="#27272a" />

                        {/* Bright silver highlight */}
                        <stop offset="50%" stopColor="#f8fafc" />

                        {/* Dark base color */}
                        <stop offset="100%" stopColor="#27272a" />

                        {/* Animates the gradient left to right, then back again indefinitely */}
                        <animate
                            attributeName="x1"
                            values="-100%; 100%; -100%"
                            dur="2.5s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="x2"
                            values="0%; 200%; 0%"
                            dur="2.5s"
                            repeatCount="indefinite"
                        />
                    </linearGradient>
                </defs>

                {/*
                  The V Shape
                  - strokeLinecap="round": gives the top points smooth, rounded edges.
                  - strokeLinejoin="round": gives the bottom vertex a perfectly smooth curve.
                */}
                <path
                    d="M 30 40 L 80 130 L 130 40"
                    stroke="url(#silver-pulse)"
                    strokeWidth="18"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Container>
    );
}