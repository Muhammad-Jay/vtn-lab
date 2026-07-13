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
