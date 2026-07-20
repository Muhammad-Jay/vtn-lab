"use client";

import * as React from "react";

import type {
    FieldContextValue,
} from "./types";

/* ============================================================================
 * Context
 * ========================================================================== */
const FieldContext =
    React.createContext<FieldContextValue | null>(
        null
    );

/* ============================================================================
 * Provider
 * ========================================================================== */
export interface FieldProviderProps {
    value: FieldContextValue;
    children: React.ReactNode;
}

export function FieldProvider({
                                  value,
                                  children,
                              }: FieldProviderProps) {

    return (
        <FieldContext.Provider value={value}>
            {children}
        </FieldContext.Provider>
    );
}

/* ============================================================================
 * Hook
 * ========================================================================== */
export function useFieldContext() {
    const context =
        React.useContext(FieldContext);

    if (!context) {
        throw new Error(
            "Field compound components must be used inside <Field>."
        );
    }
    return context;
}