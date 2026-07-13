# ADR-004: Database Selection

## Status

Accepted

---

## Context

The platform requires a relational database with strong consistency and long-term scalability.

---

## Decision

PostgreSQL will be the primary database.

Neon will host the database for V1.

---

## Consequences

Benefits:

- Mature ecosystem.
- Excellent relational support.
- Scalable.

Tradeoffs:

- Strong schemas require migrations.

Future considerations:

- Self-hosted PostgreSQL remains possible.
