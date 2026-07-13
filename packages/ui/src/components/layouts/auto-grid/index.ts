import { AutoGridRoot, AutoGridHeader, AutoGridFooter } from "./AutoGrid";
import { AutoGridItem } from "./AutoGrid.Item";

export const AutoGrid = Object.assign(AutoGridRoot, {
    Item: AutoGridItem,
    Header: AutoGridHeader,
    Footer: AutoGridFooter,
});

export * from "./types";
export * from "./maps";