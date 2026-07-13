# ADR-003: Monorepo Strategy

## Status

Accepted

---

## Context

The platform contains multiple applications and shared packages.

Managing them independently would increase complexity.

---

## Decision

The platform will use Turborepo.

---

## Consequences

Benefits:

- Shared tooling.
- Shared dependencies.
- Easier package reuse.
- Simplified builds.

Tradeoffs:

- Repository size grows over time.

Future considerations:

- Additional applications can be added without restructuring.
