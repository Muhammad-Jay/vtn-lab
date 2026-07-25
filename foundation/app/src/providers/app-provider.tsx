"use client";

import {ReactNode} from "react";
import {QueryProvider} from "./query-provider";
import {ToasterProvider} from "./toast-provider";

export function AppProviders({ children }: { children: ReactNode }) {

    return (
        <QueryProvider>
            <ToasterProvider position={"bottom-right"} closeButton={true}/>
            {children}
        </QueryProvider>
    )
}