import * as React from "react";
import { DialogContextValue } from "./types";

const DialogContext = React.createContext<DialogContextValue | null>(null);

export interface DialogProviderProps {
    value: DialogContextValue;
    children: React.ReactNode;
}

export function DialogProvider({ value, children }: DialogProviderProps) {
    return (
        <DialogContext.Provider value={value}>
            {children}
        </DialogContext.Provider>
    );
}

export function useDialogContext() {
    const context = React.useContext(DialogContext);
    if (!context) {
        throw new Error("Dialog compound components must be used inside <Dialog>.");
    }
    return context;
}