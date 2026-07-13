# Architecture Decision Records

## ADR Files

```
docs/

adr/

ADR-001-Repository-Structure.md
ADR-002-Architecture-Pattern.md
ADR-003-Monorepo-Strategy.md
ADR-004-Database-Selection.md
ADR-005-ORM-Selection.md
ADR-006-Authentication-Strategy.md
ADR-007-API-Style.md
ADR-008-Background-Processing.md
ADR-009-File-Storage-Strategy.md
ADR-010-Logging-And-Observability.md
ADR-011-Deployment-Strategy.md
```

## ADR Template

# ADR-XXX: Title

## Status

Accepted

---

## Context

Why this decision is necessary.

---

## Decision

The chosen solution.

---

## Consequences

Positive outcomes.

Tradeoffs.

Future considerations.

---

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
- foundation
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

---

# ADR-002: Architecture Pattern

## Status

Accepted

---

## Context

The platform needs strong boundaries while avoiding microservice complexity.

---

## Decision

The backend will use a Modular Monolith architecture.

Feature modules own their internal logic and remain independent whenever possible.

Examples include:

- Identity
- Organizations
- Projects
- Documents
- Activity
- Integrations

---

## Consequences

Benefits:

- Easier development.
- Faster delivery.
- Lower operational overhead.

Tradeoffs:

- Modules share the same deployment unit.

Future considerations:

- Individual modules may become independent services if justified.

---

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

---

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

---

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

---

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

---

# ADR-007: API Style

## Status

Accepted

---

## Context

The platform requires predictable APIs with low complexity.

---

## Decision

The platform will expose REST APIs.

---

## Consequences

Benefits:

- Simple.
- Widely understood.
- Easy frontend integration.

Tradeoffs:

- Multiple requests may sometimes be necessary.

Future considerations:

- GraphQL may be introduced later if justified.

---

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

---

# ADR-009: File Storage Strategy

## Status

Accepted

---

## Context

The platform requires object storage for:

- Images.
- Documents.
- Attachments.

---

## Decision

Cloudflare R2 will be used.

---

## Consequences

Benefits:

- S3 compatibility.
- Low cost.

Tradeoffs:

- External dependency.

Future considerations:

- Storage provider can be replaced.

---

# ADR-010: Logging and Observability

## Status

Accepted

---

## Context

The platform requires structured logging.

---

## Decision

Serilog will provide logging.

Initial outputs:

- Console.
- File.

---

## Consequences

Benefits:

- Structured logs.
- Easy debugging.

Tradeoffs:

- Limited observability initially.

Future considerations:

- OpenTelemetry may be introduced.

---

# ADR-011: Deployment Strategy

## Status

Accepted

---

## Context

The platform requires inexpensive and simple infrastructure for V1.

---

## Decision

Frontend:

- Vercel.

Backend:

- Render.

Database:

- Neon.

---

## Consequences

Benefits:

- Fast deployment.
- Low operational overhead.

Tradeoffs:

- Vendor dependencies.

Future considerations:

- Migration to self-hosted infrastructure remains possible.

---