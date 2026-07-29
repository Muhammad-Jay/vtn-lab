"use client";

import * as React from "react";

import type {
    DrawerContextValue,
} from "./types";

const DrawerContext =
    React.createContext<
        DrawerContextValue | null
    >(null);

export function DrawerProvider({
                                   value,
                                   children,
                               }: {
    value: DrawerContextValue;
    children: React.ReactNode;
}) {
    return (
        <DrawerContext.Provider value={value}>
            {children}
        </DrawerContext.Provider>
    );
}

export function useDrawerContext() {
    const context =
        React.useContext(DrawerContext);
    if (!context) {
        throw new Error(
            "Drawer components must be used within <Drawer.Root>.",
        );
    }
    return context;
}