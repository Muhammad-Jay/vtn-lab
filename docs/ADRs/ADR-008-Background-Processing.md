# ADR-008: Background Processing

## Status

Accepted

---

## Context

The platform requires lightweight asynchronous processing.

---

## Decision

ASP.NET BackgroundService will be used.

---

## Consequences

Benefits:

- Minimal complexity.
- Native .NET solution.

Tradeoffs:

- Limited compared to dedicated workflow engines.

Future considerations:

- More advanced systems may be introduced later.
