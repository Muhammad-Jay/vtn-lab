"use client";

import * as React from "react";
import {
    Search,
    Mail,
    Globe,
    KeyRound,
    User,
    RotateCcw,
    AlertCircle
} from "lucide-react";

import { Field } from "@repo/ui/primitives";
import type { FieldSize, FieldVariant, LabelPlacement } from "@repo/ui/primitives";

export function FieldPlayground() {
    // Live Configuration Playground State
    const [size, setSize] = React.useState<FieldSize>("md");
    const [variant, setVariant] = React.useState<FieldVariant>("default");
    const [labelPlacement, setLabelPlacement] = React.useState<LabelPlacement>("top");
    const [isLoading, setIsLoading] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    // Form Mock Values State
    const [formValues, setFormValues] = React.useState({
        username: "",
        email: "developer@domain.2026",
        password: "",
        role: "",
        bio: ""
    });

    const resetPlayground = () => {
        setSize("md");
        setVariant("default");
        setLabelPlacement("top");
        setIsLoading(false);
        setHasError(false);
    };

    const mockSelectOptions = [
        { value: "admin", label: "Administrator", leading: <User className="size-3.5" /> },
        { value: "member", label: "Standard Member", leading: <User className="size-3.5" /> },
        { value: "guest", label: "Guest Account", disabled: true, leading: <User className="size-3.5" /> },
    ];

    return (
        <div className="flex flex-col space-y-6! p-1 text-foreground">
            {/* Real-time Global Parameter Modifiers Panel */}
            <div className="rounded-xl border border-border bg-muted/40 p-4! space-y-4!">
                <div className="flex items-center justify-between border-b border-border pb-2!">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Global Field Modifiers
                    </span>
                    <button
                        type="button"
                        onClick={resetPlayground}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <RotateCcw className="size-3" /> Reset Controls
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4! sm:grid-cols-3 md:grid-cols-5 text-xs">
                    {/* Size Selector */}
                    <div className="space-y-1.5!">
                        <label className="font-medium text-muted-foreground">Size Scale</label>
                        <select
                            value={size}
                            onChange={(e) => setSize(e.target.value as FieldSize)}
                            className="w-full rounded-md border border-input bg-background px-2! py-1! focus:outline-none focus:ring-1 focus:ring-ring"
                        >
                            <option value="xs">xs (Extra Small)</option>
                            <option value="sm">sm (Small)</option>
                            <option value="md">md (Medium)</option>
                            <option value="lg">lg (Large)</option>
                        </select>
                    </div>

                    {/* Variant Selector */}
                    <div className="space-y-1.5!">
                        <label className="font-medium text-muted-foreground">Borders & Fills</label>
                        <select
                            value={variant}
                            onChange={(e) => setVariant(e.target.value as FieldVariant)}
                            className="w-full rounded-md border border-input bg-background px-2! py-1! focus:outline-none focus:ring-1 focus:ring-ring"
                        >
                            <option value="default">Default</option>
                            <option value="filled">Filled</option>
                            <option value="ghost">Ghost</option>
                            <option value="underline">Underline</option>
                        </select>
                    </div>

                    {/* Label Alignment Selector */}
                    <div className="space-y-1.5!">
                        <label className="font-medium text-muted-foreground">Label Layout</label>
                        <select
                            value={labelPlacement}
                            onChange={(e) => setLabelPlacement(e.target.value as LabelPlacement)}
                            className="w-full rounded-md border border-input bg-background px-2! py-1! focus:outline-none focus:ring-1 focus:ring-ring"
                        >
                            <option value="top">Top Layout</option>
                            <option value="left">Left Row (Fixed 48px/12rem)</option>
                            <option value="hidden">Hidden Engine</option>
                        </select>
                    </div>

                    {/* Loading Toggle Switch */}
                    <div className="flex flex-col justify-end space-y-2! pb-1!">
                        <label className="flex items-center gap-2 font-medium text-muted-foreground cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={isLoading}
                                onChange={(e) => setIsLoading(e.target.checked)}
                                className="rounded border-input text-primary focus:ring-ring"
                            />
                            Simulate Loading
                        </label>
                    </div>

                    {/* Error State Toggle Switch */}
                    <div className="flex flex-col justify-end space-y-2! pb-1!">
                        <label className="flex items-center gap-2 font-medium text-muted-foreground cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={hasError}
                                onChange={(e) => setHasError(e.target.checked)}
                                className="rounded border-input text-destructive focus:ring-destructive"
                            />
                            Simulate Error State
                        </label>
                    </div>
                </div>
            </div>

            {/* Live Interactive Form Rendering Matrix */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5! py-1!">

                {/* 1. Standard Native Input Component Verification */}
                <Field.Input
                    label="Username Handle"
                    description="Your globally unique system identification handle."
                    helper={hasError ? undefined : "Allowed characters: alphanumeric and underscores."}
                    error={hasError ? "This user handle configuration is already taken." : undefined}
                    required
                    size={size}
                    variant={variant}
                    labelPlacement={labelPlacement}
                    loading={isLoading}
                    value={formValues.username}
                    onChange={(e: any) => setFormValues(prev => ({ ...prev, username: e.target.value }))}
                    placeholder="Enter an identification handle..."
                    startAdornment={<Search className="size-4 text-muted-foreground/70" />}
                    topAdornment={labelPlacement === "hidden" ? null : (
                        <span className="text-[10px] font-mono text-muted-foreground/60 block mb-0.5!">
                            adornment: top element
                        </span>
                    )}
                />

                {/* 2. Complex Adornment Composability Verification */}
                <Field.Input
                    label="Corporate Email Access"
                    description="Primary directory authentication address channel."
                    helper={hasError ? undefined : "Verification protocols will fire directly on change."}
                    error={hasError ? "Invalid authorization context framework structure." : undefined}
                    size={size}
                    variant={variant}
                    labelPlacement={labelPlacement}
                    loading={isLoading}
                    value={formValues.email}
                    onChange={(e: any) => setFormValues(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="name@domain.com"
                    startAdornment={<Mail className="size-4 text-muted-foreground/70" />}
                    endAdornment={
                        <div className="flex items-center space-x-1.5! px-1!">
                            <span className="rounded bg-muted px-1.5! py-0.5! text-[10px] font-mono font-semibold tracking-wide border border-border shadow-sm">
                                HTTPS
                            </span>
                            {hasError && <AlertCircle className="size-4 text-destructive shrink-0" />}
                        </div>
                    }
                />

                {/* 3. Specialized Native Password Layout Engine */}
                <Field.Password
                    label="Account Access Password"
                    description="Must be at least 16 characters containing modern cryptographics."
                    helper="Visibility mechanics handle safely entirely within the primitive boundary."
                    error={hasError ? "Password context strength fails entropy validation guidelines." : undefined}
                    required
                    size={size}
                    variant={variant}
                    labelPlacement={labelPlacement}
                    loading={isLoading}
                    value={formValues.password}
                    onChange={(e: any) => setFormValues(prev => ({ ...prev, password: e.target.value }))}
                    placeholder="••••••••••••••••"
                    startAdornment={<KeyRound className="size-4 text-muted-foreground/70" />}
                />

                {/* 4. Select Control & Popover Options Verification */}
                <Field.Select
                    label="Account Governance Role"
                    description="Determines structural access policy permissions assigned."
                    helper="Select popover follows theme design configurations automatically."
                    error={hasError ? "Selected role mapping possesses logical policy conflicts." : undefined}
                    required
                    size={size}
                    variant={variant}
                    labelPlacement={labelPlacement}
                    disabled={isLoading}
                    value={formValues.role || null}
                    onValueChange={(val: string | null) => setFormValues(prev => ({ ...prev, role: val ?? "" }))}
                    placeholder="Choose an account tier..."
                    options={mockSelectOptions}
                    startAdornment={<Globe className="size-4 text-muted-foreground/70" />}
                />

                {/* 5. Custom Group Block Textarea Verification */}
                <Field.TextArea
                    label="Professional Bio Summary"
                    description="Provide brief professional metadata summary profile background context."
                    helper="Supports continuous multi-line input streams with proportional dynamic axis sizing."
                    error={hasError ? "Content exceeds safe buffer length boundaries." : undefined}
                    size={size}
                    variant={variant}
                    labelPlacement={labelPlacement}
                    value={formValues.bio}
                    onChange={(e: any) => setFormValues(prev => ({ ...prev, bio: e.target.value }))}
                    placeholder="Describe your role architecture expectations..."
                    bottomAdornment={
                        <div className="flex justify-between items-center text-[10px] text-muted-foreground/60 font-mono mt-0.5!">
                            <span>adornment: bottom element</span>
                            <span>{formValues.bio.length} characters</span>
                        </div>
                    }
                />

            </form>
        </div>
    );
}