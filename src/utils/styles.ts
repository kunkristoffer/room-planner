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


export function generateFloorStyles({ floor, curFloor, maxFloors, mode, overrides }: Props): CSSProperties {
	// Base calculations
	const postition = curFloor - maxFloors
	const delta = Math.abs(postition)
	const curve = Math.pow(delta, 1.6)

	return {
		transform: `
			translateX(${floor * (overrides?.transform?.x || 0)}px)
			translateY(${floor * (overrides?.transform?.y || 0)}px)
			translateZ(${floor * (overrides?.transform?.z || 0)}px)
			rotateX(${1 * (overrides?.rotate?.x || 0)}deg)
			rotateY(${1 * (overrides?.rotate?.y || 0)}deg)
			rotateZ(${1 * (overrides?.rotate?.z || 0)}deg)
		`,
		zIndex: 100 - delta,
		backgroundColor: floor === curFloor ? "rgba(0,0,0,0.1)" : ""
	}
}