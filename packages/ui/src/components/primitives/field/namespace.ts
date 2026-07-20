import type {
    FieldNamespace,
} from "./types";

/* ============================================================================
 * Namespace Factory
 * ========================================================================== */

/**
 * Creates the Field namespace.
 *
 * This avoids circular imports while preserving
 * full IntelliSense for all compound components.
 *
 * Usage:
 *
 * export const Field = createFieldNamespace({
 *     Input,
 *     Password,
 *     TextArea,
 *     Select,
 *     Checkbox,
 *     Switch,
 *     RadioGroup,
 *     OTP,
 *     Combobox,
 *     DatePicker,
 *     File,
 * });
 */
export function createFieldNamespace(
    namespace: FieldNamespace,
): FieldNamespace {

    return namespace;

}

/* ============================================================================
 * Optional Helper
 * ========================================================================== */

/**
 * Allows extending the namespace later without
 * recreating the entire object.
 */
export function extendFieldNamespace(
    namespace: FieldNamespace,
    extensions: Partial<FieldNamespace>,
): FieldNamespace {

    return Object.assign(
        namespace,
        extensions,
    );

}