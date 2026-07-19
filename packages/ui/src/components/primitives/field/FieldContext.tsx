// import * as React from "react";
// import { FieldContextValue } from "./types";
//
// const FieldContext = React.createContext<FieldContextValue | null>(null);
//
// export function FieldProvider({ value, children }: { value: FieldContextValue; children: React.ReactNode }) {
//     return <FieldContext.Provider value={value}>{children}</FieldContext.Provider>;
// }
//
// export function useFieldContext() {
//     const context = React.useContext(FieldContext);
//     if (!context) {
//         throw new Error("Field component elements must be rendered inside a Field context.");
//     }
//     return context;
// }