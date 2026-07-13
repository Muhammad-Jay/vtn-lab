"use client";

import React, { useState } from "react";
import {
    BookOpen,
    Settings2,
    Layers,
    X,
    Type,
    Maximize2,
    Eye,
    Sliders,
    User,
    Activity,
    Cpu,
    Terminal,
    Compass,
    ArrowUpRight,
    Check
} from "lucide-react";
import { AutoGrid, SplitScreen } from "@repo/ui/layouts";
import { Background, Container } from "@repo/ui/views";
import {Button, Text} from "@repo/ui/primitives";
import { Stack, type SpacingToken } from "@repo/ui/layouts"; // 👈 Integrated our new Stack & tokens
import { cn } from "@repo/ui";
import ProfileWidget from "../components/Menu";
import { FieldPlayground } from "../components/fields";
import { UserProfileCard } from "../components/Stack";

export default function ResearchWorkspace() {
    const [showConfig, setShowConfig] = useState(false);
    const [showConfig2, setShowConfig2] = useState(false);

    // Interactive State Engagements aligned with our layout design tokens string system
    const [gridGap, setGridGap] = useState<Extract<SpacingToken, "4" | "6" | "8">>("6");
    const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");

    return (
        <div className="h-screen w-full text-neutral-200 overflow-hidden relative">
            {/* Main root layout background using a subtle radial highlight */}
            <Background.Main gradient="radial" opacity={1} />

            <SplitScreen
                ratio={{ default: [1, 5], lg: [1, 5], md: [4, 3] }}
                variant="compact"
                className="h-screen p-3! relative z-10"
            >
                {/* Left Side Navigation Panel */}
                <SplitScreen.Left sticky={false} className="relative overflow-hidden rounded-xl">
                    <Container
                        variant="transparent"
                        height="full"
                        hidden={"md"}
                        radius="xl"
                        padding="lg"
                        className="p-8! justify-start"
                    >
                        <Background.Glass blur={"2xl"} opacity={1} />

                        <div className="flex items-center gap-3 mb-12 relative z-10">
                            <div className="p-2 bg-white/5 rounded-lg text-white border border-white/10">
                                <BookOpen size={18} />
                            </div>
                            <span className="font-bold text-white tracking-tight text-sm">Archiv.Lab</span>
                        </div>

                        <nav className="space-y-6! relative z-10 w-full">
                            <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono font-bold">
                                Research Branches
                            </div>
                            <div className="flex flex-col gap-2!">
                                {["Quantum Dynamics", "Neural Architecture", "Carbon Theory"].map((item, idx) => (
                                    <button
                                        key={item}
                                        className={cn(
                                            "flex items-center justify-between text-sm py-2! px-3! rounded-lg text-left transition-all duration-200",
                                            idx === 1
                                                ? "bg-white/5 text-white font-medium border border-white/5"
                                                : "text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.02]"
                                        )}
                                    >
                                        <span>{item}</span>
                                        {idx === 1 && <div className="size-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </Container>
                </SplitScreen.Left>

                {/* Right Side Main Canvas Surface */}
                <SplitScreen.Right className="relative rounded-xl overflow-hidden">
                    <Background.Grid gridSize={36} fade={true} interactiveHighlight={true} opacity={1} />

                    <div className="relative z-10 h-full space-y-5.5! overflow-y-auto no-scrollbar p-4! md:p-12!">
                        {/* Workspace Command Header Panel */}
                        <div className="flex justify-between items-center mb-12">
                            <div className="space-y-1.5!">
                                <h1 className="text-2xl font-light text-white tracking-tight">Neural Architecture</h1>
                                <p className="text-neutral-500 text-xs font-mono">NODE // CORE_MATRIX_01_REBUILD</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowConfig2(true)}
                                    className="p-2.5! rounded-lg bg-neutral-900/60 border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all text-neutral-400 hover:text-white"
                                    title="Component System Matrix"
                                >
                                    <Sliders size={16} />
                                </button>
                                <button
                                    onClick={() => setShowConfig(true)}
                                    className="p-2.5! rounded-lg bg-neutral-900/60 border border-white/5 hover:border-white/20 hover:bg-neutral-800 transition-all text-neutral-400 hover:text-white"
                                    title="Workspace Canvas Options"
                                >
                                    <Settings2 size={16} />
                                </button>

                                <Button variant={"primary"} animate={true} className={'px-2!'} showDefaultIcon={true}>
                                    the button
                                </Button>

                                <Button
                                    variant={"destructive"}
                                    animate={true}
                                    center={true}
                                    width={"fit"}
                                    tooltip={"Astro"}
                                    onClick={() => setShowConfig(true)}
                                    className={'px-2!'}
                                    icon={<Compass/>}
                                    hideContent={"md"}
                                    showDefaultIcon={true}
                                >
                                    Save changes
                                </Button>

                                <Button.Success icon={<Check/>} hideContent={"md"} showDefaultIcon={true} animate={true} center={true}>
                                    Success
                                </Button.Success>

                                <Button.Outline
                                    icon={<Check/>}
                                    hideContent={"md"}
                                    tooltip={"The main Glass Button description variant"}
                                    animate={true}
                                    center={true}
                                >
                                    Success
                                </Button.Outline>

                                <ProfileWidget/>
                            </div>
                        </div>

                        {/* Interactive Responsive Grid System Layout */}
                        <AutoGrid mode="fixed" columns={{ base: 1, xl: 12 }} gap={Number(gridGap)} className="w-full!">

                            {/* Standard Container wrapper for semantic article surface content layout */}
                            <AutoGrid.Item span={{ base: 1, xl: 8 }} padding={0}>
                                <Container variant="default" radius="xl" className="p-8! border border-white/5 bg-neutral-950/40">
                                    <article className="prose prose-invert max-w-none">
                                        <p className={cn(
                                            "leading-relaxed md:p-2! text-neutral-400 transition-all duration-300",
                                            fontSize === "sm" && "text-sm",
                                            fontSize === "base" && "text-base",
                                            fontSize === "lg" && "text-lg text-neutral-300"
                                        )}>
                                            The synthesis of neural structures requires an appreciation for latent space
                                            topography. When optimizing for <span className="text-white font-medium underline decoration-neutral-700 underline-offset-4">high-fidelity reconstruction</span>,
                                            the gradient descent must be tempered by adaptive learning rates. Cross-modal architectures
                                            frequently drop signals across high-dimensional boundaries when matrices match imperfectly.
                                        </p>
                                    </article>
                                </Container>
                            </AutoGrid.Item>

                            {/* Interactive Glass Card layout handling real-time diagnostic parameters */}
                            <AutoGrid.Item span={{ base: 1, xl: 4 }} padding={0}>
                                <Container
                                    variant="glass"
                                    radius="xl"
                                    interactive
                                    className="p-6! border border-white/5 flex flex-col justify-between h-full group"
                                >
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className="p-2 bg-white/5 rounded-lg text-neutral-400 group-hover:text-white transition-colors">
                                                <Compass size={16} />
                                            </div>
                                            <span className="text-[10px] font-mono text-neutral-500 tracking-wider">SEC_ALPHA_V4</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white text-sm font-medium">Topographic Vector Plane</h3>
                                            <p className="text-xs text-neutral-400 mt-1">Realtime latent coordinates projection tracking arrays.</p>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-500 font-mono">
                                        <span>SYSTEM_STABLE</span>
                                        <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </Container>
                            </AutoGrid.Item>

                            {/* Interactive secondary card containers mapping micro-telemetry matrix cells */}
                            {[
                                { title: "Matrix Processing Core", icon: <Cpu size={14} />, val: "94.2 TFLOPs" },
                                { title: "Activity Telemetry Stream", icon: <Activity size={14} />, val: "0.04ms Latency" },
                                { title: "Diagnostic Shell Status", icon: <Terminal size={14} />, val: "Node Connected" },
                                { title: "Vector Memory Cache", icon: <Layers size={14} />, val: "12.4 GB / 16 GB" },
                                { title: "Identity Profile Registry", icon: <User size={14} />, val: "Secure Verification" }
                            ].map((card, i) => (
                                <AutoGrid.Item key={i} span={{ base: 1, xl: 4 }} padding={0}>
                                    <Container
                                        variant="default"
                                        animate={true}
                                        animation={"scale"}
                                        interactive
                                        radius="lg"
                                        className="p-5! h-[150px] justify-between border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50"
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span className="text-xs font-medium text-neutral-400">{card.title}</span>
                                            <span className="text-neutral-500">{card.icon}</span>
                                        </div>
                                        <div className="text-lg font-light text-white tracking-tight font-mono">
                                            {card.val}
                                        </div>
                                    </Container>
                                </AutoGrid.Item>
                            ))}

                            {/* Anchor card embedding a clean profile layout interface asset hook */}
                            <AutoGrid.Item span={{ base: 1, xl: 4 }} padding={0}>
                                <Container variant="secondary" radius="lg" className="p-5! h-[150px] justify-between border border-white/5 bg-neutral-950/40">
                                    <div className="text-xs text-neutral-400 font-medium">Session Framework Access</div>
                                    <div className="flex items-center gap-2">
                                        <ProfileWidget/>
                                        <span className="text-xs font-mono text-neutral-500">Quick Menu Wrapper</span>
                                    </div>
                                </Container>
                            </AutoGrid.Item>

                        </AutoGrid>
                    </div>
                </SplitScreen.Right>

                {/* Primary Configurations Modal Overlay */}
                <SplitScreen.Overlay
                    visible={showConfig}
                    onClick={() => setShowConfig(false)}
                    interactive={true}
                    blur={true}
                    backdrop={true}
                    position="center"
                    className="w-full!"
                >
                    <Container
                        variant="glass"
                        radius="2xl"
                        shadow="lg"
                        animate
                        animation="pop"
                        className="max-h-[80dvh] w-[640px] p-8! border border-white/10 flex flex-col backdrop-blur-2xl bg-neutral-950/80"
                    >
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5 relative z-10">
                            <div className="flex items-center gap-2">
                                <Layers size={16} className="text-neutral-400" />
                                <h2 className="text-white text-base font-medium tracking-tight">Workspace Configuration</h2>
                            </div>
                            <button onClick={() => setShowConfig(false)} className="p-1.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors border border-transparent hover:border-white/5">
                                X
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto no-scrollbar py-2! relative z-10">
                            <AutoGrid mode="fit" minItemWidth={270} gap={4} className="w-full">

                                <Container variant="default" radius="xl" className="p-4! border border-white/5 bg-white/[0.01] space-y-5!">
                                    <div className="flex items-center gap-2! text-xs text-neutral-300 font-medium">
                                        <Maximize2 size={14} className="text-neutral-400" />
                                        Grid Canvas Layout Spacing
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5!">
                                        {(["4", "6", "8"] as const).map((g) => (
                                            <button
                                                key={g}
                                                onClick={() => setGridGap(g)}
                                                className={cn(
                                                    "py-1.5! px-1! text-[11px] font-mono rounded-md border text-center transition-all",
                                                    gridGap === g
                                                        ? "bg-white text-black border-white font-bold shadow-sm"
                                                        : "bg-transparent border-white/5 text-neutral-400 hover:border-white/20 hover:bg-white/[0.02]"
                                                )}
                                            >
                                                {g === "4" ? "Compact" : g === "6" ? "Normal" : "Relaxed"}
                                            </button>
                                        ))}
                                    </div>
                                </Container>

                                <Container variant="default" radius="xl" className="p-4! border border-white/5 bg-white/[0.01] space-y-3!">
                                    <div className="flex items-center gap-2! text-xs text-neutral-300 font-medium">
                                        <Type size={14} className="text-neutral-400" />
                                        Text Metric Scaling
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5!">
                                        {(["sm", "base", "lg"] as const).map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setFontSize(size)}
                                                className={cn(
                                                    "py-1.5! px-1! text-[11px] uppercase tracking-wider rounded-md border text-center transition-all",
                                                    fontSize === size
                                                        ? "bg-white text-black border-white font-bold shadow-sm"
                                                        : "bg-transparent border-white/5 text-neutral-400 hover:border-white/20 hover:bg-white/[0.02]"
                                                )}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </Container>

                                <Container variant="default" radius="xl" className="p-4! bg-black/60 border border-white/5 space-y-2 col-span-full">
                                    <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-mono">
                                        <Eye size={12} />
                                        <Text.Subtitle>
                                            System Runtime Nodes Diagnostics
                                        </Text.Subtitle>
                                    </div>
                                    <div className="p-3! bg-neutral-950/80 rounded-md font-mono text-[11px] text-neutral-500 border border-white/5 h-20 overflow-y-auto no-scrollbar leading-relaxed">
                                        &gt; initialized `Background.Grid` canvas background wrapper engine context.<br />
                                        &gt; injected `Container` primitive modules matching master design tokens layer layout definitions.<br />
                                        &gt; thread synchronization complete. systems ready.
                                    </div>
                                </Container>

                            </AutoGrid>
                        </div>
                    </Container>
                </SplitScreen.Overlay>

                {/* Secondary Component Matrix Playground Drawer */}
                <SplitScreen.Overlay
                    visible={showConfig2}
                    onClick={() => setShowConfig2(false)}
                    interactive={true}
                    blur={true}
                    backdrop={true}
                    position="center"
                    className="w-full h-full!"
                >
                    <Container
                        variant="glass"
                        radius="2xl"
                        shadow="md"
                        className="w-[1100px] max-h-[85dvh] p-8! border border-white/10 bg-neutral-950/90 backdrop-blur-3xl overflow-hidden flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-6 pb-3 border-b border-white/5">
                            <div className="space-y-0.5">
                                <h2 className="text-white text-sm font-medium tracking-tight">Primitive Component Laboratory</h2>
                                <p className="text-[11px] font-mono text-neutral-500">SYSTEM // COMPONENT_ISOLATION_MATRIX</p>
                            </div>
                            <button onClick={() => setShowConfig2(false)} className="p-1.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
                                <X size={16} />
                            </button>
                        </div>

                        {/* Split playground environment side-by-side using our Stack structural layout engine */}
                        <div className="flex-1 overflow-y-auto no-scrollbar">
                            <Stack direction="column" gap="6" grow={true} fullWidth className="items-start">
                                {/* Left Side: Live Fields Configuration Playground */}
                                <div className="flex-1  rounded-xl p-4">
                                    <FieldPlayground />
                                </div>

                                {/* Right Side: User Profile Cards List using nested layout tokens */}
                                <div className="w-[360px] border border-white/5 bg-neutral-900/10 rounded-xl p-4">
                                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-500 block mb-4">
                                        Rendered Stack Layout Iterations
                                    </span>
                                    <Container gap="md" variant={"ghost"} overflow={"scroll"} className="space-y-4! no-scrollbar! h-full">
                                        {Array.from({ length: 3 }).map((_, i) => (
                                            <UserProfileCard key={i} />
                                        ))}
                                    </Container>
                                </div>
                            </Stack>
                        </div>
                    </Container>
                </SplitScreen.Overlay>
            </SplitScreen>
        </div>
    );
}