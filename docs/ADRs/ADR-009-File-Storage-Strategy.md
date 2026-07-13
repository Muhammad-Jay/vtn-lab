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
