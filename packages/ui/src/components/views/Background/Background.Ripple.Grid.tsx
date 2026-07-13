"use client";

import * as React from "react";

import {
    createRippleGridStyle,
    getRippleTiming,
} from "./Background.Utils";

import { BackgroundRippleCell } from "./Background.Ripple.Cell";

interface ClickedCell {
    row: number;
    col: number;
}

export interface BackgroundRippleGridProps {
    rows: number;

    cols: number;

    cellSize: number;

    cellOpacity: number;

    clickedCell: ClickedCell | null;

    interactiveHighlight?: boolean;

    onCellClick?: (
        row: number,
        col: number
    ) => void;
}

export function BackgroundRippleGrid({
    rows,
    cols,
    cellSize,
    cellOpacity,
    clickedCell,
    interactiveHighlight = false,
    onCellClick,
}: BackgroundRippleGridProps) {
    const cells = React.useMemo(
        () =>
            Array.from(
                {
                    length: rows * cols,
                },
                (_, i) => i
            ),
        [rows, cols]
    );

    return (
        <div
            style={createRippleGridStyle(
                rows,
                cols,
                cellSize
            )}
        >
            {cells.map((index) => {
                const row = Math.floor(
                    index / cols
                );

                const col = index % cols;

                return (
                    <BackgroundRippleCell
                        key={index}
                        opacity={cellOpacity}
                        interactive={
                            interactiveHighlight
                        }
                        style={getRippleTiming(
                            clickedCell,
                            row,
                            col
                        )}
                        onActivate={() =>
                            onCellClick?.(
                                row,
                                col
                            )
                        }
                    />
                );
            })}
        </div>
    );
}

BackgroundRippleGrid.displayName =
    "Background.Ripple.Grid";