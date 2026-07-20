export * from "./types";
export * from "./Field.Utils";
export * from "./Field.Context";
export * from "./namespace";

/* ============================================================================
 * Layout
 * ========================================================================== */

export * from "./layout";

/* ============================================================================
 * Controls
 * ========================================================================== */

export * from "./controls";

/* ============================================================================
 * Compound Namespace
 * ========================================================================== */

import { createFieldNamespace } from "./namespace";

import { FieldInput } from "./controls/Input";
import { FieldPassword } from "./controls/Password";
import { FieldTextArea } from "./controls/TextArea";
import { FieldSelect } from "./controls/Select";

/* Placeholder exports */

const Placeholder = (() => null) as any;

export const Field = createFieldNamespace({
    Input: FieldInput,
    Password: FieldPassword,
    TextArea: FieldTextArea,
    Select: FieldSelect,
    Checkbox: Placeholder,
    Switch: Placeholder,
    RadioGroup: Placeholder,
    OTP: Placeholder,
    Combobox: Placeholder,
    DatePicker: Placeholder,
    File: Placeholder,
});