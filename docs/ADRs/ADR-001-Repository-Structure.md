# ADR-001: Repository Structure

## Status

Accepted

---

## Context

The platform requires a structure that supports long-term maintainability while remaining simple enough for a solo developer.

The repository should support future applications without requiring restructuring.

---

## Decision

The platform will use a top-level separation between:

- apps
- packages
- docs

Applications remain isolated.

Reusable backend code is placed inside foundation projects.

Reusable frontend code is placed inside packages.

---

## Consequences

Benefits:

- Clear separation of responsibilities.
- Supports future APIs.
- Reduces duplication.
- Improves maintainability.

Tradeoffs:

- Slightly more structure than a single application repository.

Future considerations:

- Additional APIs can be introduced without architectural changes.
