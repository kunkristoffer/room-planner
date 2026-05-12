import { CSSProperties } from "react";

export type ViewMode = "2D" | "3D"

interface Props {
	floor: number
	curFloor: number
	maxFloors: number
	mode: ViewMode
	containerSize: {
		height: number
		width: number
	}
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


export function generateFloorStyles({ floor, curFloor, mode, overrides, containerSize }: Props): CSSProperties {
	// Setting overrides
	const transform = {
		x: overrides?.transform?.x || 0,
		y: overrides?.transform?.y || 0,
		z: overrides?.transform?.z || 0,
	}
	const rotate = {
		x: overrides?.rotate?.x || 0,
		y: overrides?.rotate?.y || 0,
		z: overrides?.rotate?.z || 0,
	}

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
			translateX(${transform.x}px)
			translateY(${postition * -curve * transform.y}px)
			translateZ(${postition * transform.z}px)
			rotateX(${postition * -curve * rotate.x}deg)
			rotateY(${rotate.y}deg)
			rotateZ(${rotate.z}deg)
		`,
		zIndex: 100 - delta,
		opacity: delta > 0 ? 0.3 : 1,
		backgroundColor: floor === curFloor ? "rgba(225,225,225,1)" : "",
		height: "100%",
		width: "80%",
		left: "15%"
	}
}