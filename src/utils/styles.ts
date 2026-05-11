import { CSSProperties } from "react";

export type ViewMode = "2D" | "3D"

interface Props {
	floor: number
	curFloor: number
	maxFloors: number
	mode: ViewMode
	overrides?: {
		transform?: {
			x?: number
			y?: number
			z?: number
		}
		rotate?: {
			x?: number
			y?: number
			z?: number
		}

	}
}


export function generateFloorStyles({ floor, curFloor, mode, overrides }: Props): CSSProperties {
	// Base calculations
	const postition = floor - curFloor
	const delta = Math.abs(postition)
	const curve = Math.pow(delta, 0.2)

	if (mode === "2D") return {
		opacity: delta === 0 ? 1 : 0,
		pointerEvents: delta === 0 ? "auto" : "none",
		height: "100%",
		width: "100%",
		left: 0
	}

	return {
		transform: `
			translateX(${(overrides?.transform?.x || 0)}px)
			translateY(${postition * -curve * (overrides?.transform?.y || 0)}px)
			translateZ(${postition * (overrides?.transform?.z || 0)}px)
			rotateX(${postition * -curve * (overrides?.rotate?.x || 0)}deg)
			rotateY(${1 * (overrides?.rotate?.y || 0)}deg)
			rotateZ(${1 * (overrides?.rotate?.z || 0)}deg)
		`,
		zIndex: 100 - delta,
		opacity: delta > 0 ? 0.3 : 1,
		backgroundColor: floor === curFloor ? "rgba(225,225,225,1)" : "",
		height: "110%",
		width: "80%",
		left: "15%"
	}
}