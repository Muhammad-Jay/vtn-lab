// response.ts

import { ApiError } from "./errors";

/* ==========================================================================
 * Success
 * ========================================================================== */

export interface SuccessResult<T> {
    success: true;
    data: T;
}

/* ==========================================================================
 * Failure
 * ========================================================================== */

export interface FailureResult {
    success: false;
    error: ApiError;
}

/* ==========================================================================
 * Result
 * ========================================================================== */

export type Result<T> =
    | SuccessResult<T>
    | FailureResult;

/* ==========================================================================
 * Helpers
 * ========================================================================== */

export function ok<T>(data: T): SuccessResult<T> {
    return {
        success: true,
        data,
    };
}

export function fail(error: ApiError): FailureResult {
    return {
        success: false,
        error,
    };
}