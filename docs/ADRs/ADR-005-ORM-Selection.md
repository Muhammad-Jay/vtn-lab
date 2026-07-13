# ADR-005: ORM Selection

## Status

Accepted

---

## Context

The platform requires fast development and migration support.

---

## Decision

Entity Framework Core will be used.

---

## Consequences

Benefits:

- Native .NET support.
- Automatic migrations.
- High productivity.

Tradeoffs:

- Additional abstraction layer.

Future considerations:

- Dapper may be introduced for performance-critical areas.
