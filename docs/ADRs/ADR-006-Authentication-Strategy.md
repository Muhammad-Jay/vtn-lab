# ADR-006: Authentication Strategy

## Status

Accepted

---

## Context

Authentication is not a core business problem for the platform.

---

## Decision

Clerk will manage:

- Authentication.
- Sessions.
- Social logins.
- User identities.

---

## Consequences

Benefits:

- Faster delivery.
- Reduced security burden.
- OAuth support.

Tradeoffs:

- External dependency.

Future considerations:

- Authentication provider may be replaced without affecting business modules.
