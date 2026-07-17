// errors.ts

/* ==========================================================================
 * Base Error
 * ========================================================================== */

export class ApiError extends Error {
    readonly status?: number;
    readonly details?: unknown;

    constructor(
        message: string = "API request failed.",
        status?: number,
        details?: unknown
    ) {
        super(message);

        this.name = "ApiError";
        this.status = status;
        this.details = details;
    }
}

/* ==========================================================================
 * Authentication
 * ========================================================================== */

export class UnauthorizedError extends ApiError {
    constructor(
        message: string = "Unauthorized.",
        details?: unknown
    ) {
        super(message, 401, details);

        this.name = "UnauthorizedError";
    }
}

export class ForbiddenError extends ApiError {
    constructor(
        message: string = "Forbidden.",
        details?: unknown
    ) {
        super(message, 403, details);

        this.name = "ForbiddenError";
    }
}

/* ==========================================================================
 * Client Errors
 * ========================================================================== */

export class NotFoundError extends ApiError {
    constructor(
        message: string = "Resource not found.",
        details?: unknown
    ) {
        super(message, 404, details);

        this.name = "NotFoundError";
    }
}

export class ValidationError extends ApiError {
    constructor(
        message: string = "Validation failed.",
        details?: unknown
    ) {
        super(message, 422, details);

        this.name = "ValidationError";
    }
}

export class ConflictError extends ApiError {
    constructor(
        message: string = "Resource conflict.",
        details?: unknown
    ) {
        super(message, 409, details);

        this.name = "ConflictError";
    }
}

export class RateLimitError extends ApiError {
    constructor(
        message: string = "Too many requests.",
        details?: unknown
    ) {
        super(message, 429, details);

        this.name = "RateLimitError";
    }
}

/* ==========================================================================
 * Server Errors
 * ========================================================================== */

export class ServerError extends ApiError {
    constructor(
        message: string = "Internal server error.",
        status: number = 500,
        details?: unknown
    ) {
        super(message, status, details);

        this.name = "ServerError";
    }
}

/* ==========================================================================
 * Network Errors
 * ========================================================================== */

export class NetworkError extends ApiError {
    constructor(
        cause?: unknown
    ) {
        super("Network request failed.");

        this.name = "NetworkError";
    }
}

export class TimeoutError extends ApiError {
    constructor(
        message: string = "Request timed out."
    ) {
        super(message);

        this.name = "TimeoutError";
    }
}