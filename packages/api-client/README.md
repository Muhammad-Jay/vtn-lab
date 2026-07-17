# API Client Package Documentation

## Overview

The `@repo/api-client` package is the platform's low-level HTTP SDK. It provides a consistent, type-safe interface for communicating with backend services while remaining completely framework-agnostic.

The package has **no knowledge of authentication, Next.js, React, business domains, or platform modules**. Its only responsibility is making HTTP requests reliably.

Core installs and configures the API client, while feature modules consume the configured client through Core.

---

# Responsibilities

The API client is responsible for:

- HTTP requests
- URL construction
- Query parameter serialization
- JSON serialization/deserialization
- Automatic Authorization header injection (via `getToken()`)
- Retry logic
- Request timeout
- Typed responses
- Standardized API errors
- Type-safe request methods

The API client is **not** responsible for:

- Authentication logic
- User sessions
- Business rules
- Feature-specific queries
- React hooks
- State management

---

# Architecture

```
Modules
      │
      ▼
Core Wrapper
      │
      ▼
API Client
      │
      ▼
fetch()
      │
      ▼
Backend
```

---

# Folder Structure

```
packages/
└── api-client/
    ├── client.ts
    ├── request.ts
    ├── methods.ts
    ├── retry.ts
    ├── response.ts
    ├── errors.ts
    ├── types.ts
    ├── utils.ts
    └── index.ts
```

---

# File Responsibilities

## client.ts

Creates the API client.

Responsible for:

- storing configuration
- exposing HTTP methods
- exposing the generic request function

Public API:

```ts
createApiClient(...)
```

---

## request.ts

Core HTTP implementation.

Responsible for:

- building URLs
- merging headers
- retrieving bearer token
- calling fetch()
- parsing responses
- mapping errors
- retry execution
- returning typed Result<T>

All HTTP requests flow through this file.

---

## methods.ts

Provides convenience wrappers.

Exposes:

```ts
client.get()

client.post()

client.put()

client.patch()

client.delete()
```

Internally these all call `request()`.

---

## retry.ts

Handles retry execution.

Supports:

- retry count
- delay
- exponential backoff
- jitter

Retries only occur for retryable failures.

---

## response.ts

Defines the SDK response contract.

Every request returns:

```ts
Promise<Result<T>>
```

Never:

- tuples
- exceptions on expected API failures
- raw fetch Response objects

---

## errors.ts

Contains all platform API error types.

Hierarchy:

```
ApiError
├── UnauthorizedError
├── ForbiddenError
├── NotFoundError
├── ValidationError
├── ConflictError
├── RateLimitError
├── ServerError
├── NetworkError
└── TimeoutError
```

Modules should check:

```ts
instanceof ValidationError

instanceof UnauthorizedError
```

instead of inspecting HTTP status codes.

---

## types.ts

Contains all public SDK types.

Examples:

- ApiClient
- ClientOptions
- RequestConfig
- RetryOptions
- Headers
- QueryParams

---

## utils.ts

Shared helper functions.

Includes:

- URL builder
- header merging
- query serialization
- JSON detection
- timeout helpers
- retry helpers

---

## index.ts

Exports the public SDK.

Consumers should import only from:

```ts
@repo/api-client
```

---

# Client Creation

Example:

```ts
const client = createApiClient({
    baseUrl: "...",

    getToken: async () => {
        return session?.accessToken;
    },
});
```

The SDK never knows where the token comes from.

Core decides.

---

# Authentication

Authentication is implemented through dependency injection.

The SDK accepts:

```ts
getToken(): Promise<string | null>
```

Before every request:

```
getToken()

↓

token

↓

Authorization header

↓

fetch()
```

If no token exists:

- request proceeds without Authorization header

The SDK does **not** throw authentication errors on missing tokens.

Core may choose to enforce authentication separately.

---

# Request Lifecycle

```
Module Query

↓

client.get()

↓

request()

↓

getToken()

↓

merge headers

↓

build URL

↓

fetch()

↓

parse response

↓

retry (if necessary)

↓

Result<T>
```

---

# Response Contract

Every request returns:

```ts
Result<T>
```

Success:

```ts
{
    success: true,
    data: T
}
```

Failure:

```ts
{
    success: false,
    error: ApiError
}
```

Example:

```ts
const result = await client.get<User>("/users/me");

if (!result.success) {
    return;
}

console.log(result.data);
```

TypeScript automatically narrows `result.data` after checking `success`.

---

# Error Handling

HTTP errors become typed errors.

| Status | Error |
|---------|----------------------|
|401|UnauthorizedError|
|403|ForbiddenError|
|404|NotFoundError|
|409|ConflictError|
|422|ValidationError|
|429|RateLimitError|
|5xx|ServerError|
|Network failure|NetworkError|
|Timeout|TimeoutError|

Consumers should never inspect raw status codes.

---

# Retry Policy

Default configuration:

```ts
enabled: true

retries: 3

delay: 300ms

backoff: true

jitter: true
```

Retryable status codes:

```
408

429

500

502

503

504
```

Non-retryable:

```
400

401

403

404

409

422
```

---

# Timeout

Each request supports:

```ts
timeout: number
```

Default:

```
30 seconds
```

Internally uses:

```ts
AbortSignal.timeout(...)
```

---

# Query Parameters

Supports:

```ts
{
    page: 1,

    search: "john",

    roles: ["admin", "owner"]
}
```

Automatically serializes to:

```
?page=1

&search=john

&roles=admin

&roles=owner
```

---

# Request Body

Automatically serializes objects to JSON.

Example:

```ts
client.post(
    "/users",
    {
        name: "John"
    }
)
```

Automatically sends:

```
Content-Type: application/json
```

---

# HTTP Methods

Supported methods:

```ts
client.get()

client.post()

client.put()

client.patch()

client.delete()

client.request()
```

---

# Type Safety

Requests:

```ts
client.post<User, CreateUserDto>()
```

Response:

```ts
Result<User>
```

No casting required.

---

# Intended Usage

Core installs the client.

```ts
const client = createApiClient(...);
```

Feature modules create query objects.

Example:

```ts
export const projectApi = {

    list() {
        return client.get<Project[]>("/projects");
    },

    create(data: CreateProjectDto) {
        return client.post<Project>(
            "/projects",
            data
        );
    },
};
```

This keeps modules focused on business logic while the SDK handles transport concerns.

---

# Design Principles

- Framework agnostic
- Authentication agnostic
- Type-safe
- Predictable
- Minimal API surface
- Standardized responses
- Standardized errors
- Zero business logic
- Easy to extend
- Simple to maintain
```