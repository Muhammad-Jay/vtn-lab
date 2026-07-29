import { DrawerRoot } from "./layout/Drawer.Root";
import { DrawerContent } from "./layout/Drawer.Content";
import { DrawerHeader } from "./layout/Drawer.Header";
import { DrawerBody } from "./layout/Drawer.Body";
import { DrawerFooter } from "./layout/Drawer.Footer";

import { DrawerPortal } from "./primitives/Drawer.Portal";
import { DrawerOverlay } from "./primitives/Drawer.Overlay";
import { DrawerTrigger } from "./primitives/Drawer.Trigger";
import { DrawerClose } from "./primitives/Drawer.Close";
import { DrawerTitle } from "./primitives/Drawer.Title";
import { DrawerDescription } from "./primitives/Drawer.Description";
import { DrawerSwipeHandle } from "./primitives/Drawer.SwipeHandle";
import {DrawerViewport} from "./primitives/Drawer.Viewport";
import { DrawerVirtualKeyboardProvider } from "./primitives/Drawer.VirtualKeyboardProvider";
import { DrawerSwipeArea } from "./primitives/Drawer.SwipeArea";

export const Drawer = {
    Root: DrawerRoot,
    Portal: DrawerPortal,
    Viewport: DrawerViewport,
    Overlay: DrawerOverlay,
    Trigger: DrawerTrigger,
    Close: DrawerClose,
    Content: DrawerContent,
    Header: DrawerHeader,
    Body: DrawerBody,
    Footer: DrawerFooter,
    Title: DrawerTitle,
    Description: DrawerDescription,
    SwipeHandle: DrawerSwipeHandle,
    VirtualKeyboardProvider: DrawerVirtualKeyboardProvider,
    SwipeArea: DrawerSwipeArea,
} as const;

export * from "./types";