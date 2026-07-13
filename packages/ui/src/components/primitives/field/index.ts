export { FieldRoot } from "./Field.Root";
export { FieldLabel } from "./Field.Label";
export { FieldDescription } from "./Field.Description";
export { FieldHelper } from "./Field.Helper";

// Factory

import {
    createFieldNamespace,
} from "./Field.Factory";

// Controls

import { FieldInput } from "./input/Input";
import { PasswordField } from "./input/Password";
import { FieldTextArea } from "./textarea/Textarea";
import { FieldSelect } from "./select/Select";

// Namespace

export const Field = createFieldNamespace({
    Input: FieldInput,
    Password: PasswordField,
    OTP: () => null,
    TextArea: FieldTextArea,
    Select: FieldSelect,
    Checkbox: () => null,
    Switch: () => null,
    RadioGroup: () => null,
    Combobox: () => null,
    DatePicker: () => null,
    File: () => null,
});

export type {
    FieldSize,
    FieldRadius,
    FieldVariant,
    FieldWidth,
    HiddenBreakpoint,
    LabelPlacement,
    FieldLayoutProps,
    FieldControlProps,
    FieldRootProps,
    FieldInputProps,
    FieldTextAreaProps,
    FieldSelectProps,
    SelectOption,
} from "./types";
