import type {
    ComponentType,
} from "react";

export interface FieldNamespace {
    Input: ComponentType<any>;
    Password: ComponentType<any>;
    OTP: ComponentType<any>;
    TextArea: ComponentType<any>;
    Select: ComponentType<any>;
    Checkbox: ComponentType<any>;
    Switch: ComponentType<any>;
    RadioGroup: ComponentType<any>;
    Combobox: ComponentType<any>;
    DatePicker: ComponentType<any>;
    File: ComponentType<any>;
}

/**
 * Creates the Field namespace.
 *
 * Actual components are supplied
 * from index.ts to avoid circular imports.
 */
export function createFieldNamespace(
    namespace: FieldNamespace
) {
    return namespace;
}