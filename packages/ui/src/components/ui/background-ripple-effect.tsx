"use client";

import * as React from "react";

import { cn } from "../../lib/utils";

const MAX_CELLS = 720;

type CellCoordinate = {
    column: number;
    row: number;
};

type CellStyle = React.CSSProperties & {
    "--delay"?: string;
    "--duration"?: string;
};

function useElementSize<T extends HTMLElement>() {
    const ref = React.useRef<T>(null);
    const [size, setSize] = React.useState({
        width: 0,
        height: 0,
    });

    React.useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];

            if (!entry) return;

            const { width, height } = entry.contentRect;

            setSize((current) =>
                current.width === width && current.height === height
                    ? current
                    : { width, height }
            );
        });

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return { ref, size };
}

export function BackgroundRippleEffect({
    rows = 8,
    cols = 28,
    cellSize = 56,
    cellOpacity = 0.45,
    interactive = false,
}: {
    rows?: number;
    cols?: number;
    cellSize?: number;
    cellOpacity?: number;
    interactive?: boolean;
}) {
    const { ref, size } = useElementSize<HTMLDivElement>();
    const [clickedCell, setClickedCell] =
        React.useState<CellCoordinate | null>(null);
    const [rippleKey, setRippleKey] = React.useState(0);

    const grid = React.useMemo(() => {
        const desiredColumns =
            size.width > 0
                ? Math.max(1, Math.ceil(size.width / cellSize))
                : cols;
        const desiredRows =
            size.height > 0
                ? Math.max(1, Math.ceil(size.height / cellSize))
                : rows;
        const densityScale = Math.max(
            1,
            Math.ceil(
                Math.sqrt(
                    (desiredColumns * desiredRows) /
                        MAX_CELLS
                )
            )
        );
        const columns = Math.ceil(
            desiredColumns / densityScale
        );
        const measuredRows = Math.ceil(
            desiredRows / densityScale
        );

        return {
            columns,
            rows: measuredRows,
            cells: Array.from(
                { length: columns * measuredRows },
                (_, index) => index
            ),
        };
    }, [cellSize, cols, rows, size.height, size.width]);

    return (
        <div
            ref={ref}
            className="absolute inset-0 overflow-hidden"
        >
            <div
                key={rippleKey}
                className="grid h-full w-full"
                style={{
                    gridTemplateColumns: `repeat(${grid.columns}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${grid.rows}, minmax(0, 1fr))`,
                }}
            >
                {grid.cells.map((index) => {
                    const row = Math.floor(
                        index / grid.columns
                    );
                    const column = index % grid.columns;
                    const distance = clickedCell
                        ? Math.hypot(
                              clickedCell.row - row,
                              clickedCell.column - column
                          )
                        : 0;
                    const rippleStyle: CellStyle = clickedCell
                        ? {
                              "--delay": `${Math.min(
                                  distance * 38,
                                  900
                              )}ms`,
                              "--duration": `${Math.min(
                                  180 + distance * 28,
                                  900
                              )}ms`,
                          }
                        : {};

                    return (
                        <div
                            key={index}
                            className={cn(
                                "border transition-opacity duration-200",
                                "motion-reduce:animate-none",
                                interactive &&
                                    "cursor-pointer hover:opacity-100",
                                clickedCell &&
                                    "animate-cell-ripple"
                            )}
                            style={{
                                opacity: cellOpacity,
                                backgroundColor:
                                    "color-mix(in oklch, var(--muted) 52%, transparent)",
                                borderColor:
                                    "color-mix(in oklch, var(--border) 70%, transparent)",
                                boxShadow:
                                    "inset 0 0 1.5rem color-mix(in oklch, var(--foreground) 4%, transparent)",
                                ...rippleStyle,
                            }}
                            onClick={
                                interactive
                                    ? () => {
                                          setClickedCell({
                                              row,
                                              column,
                                          });
                                          setRippleKey((key) => key + 1);
                                      }
                                    : undefined
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}
