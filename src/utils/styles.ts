import { CSSProperties } from "react";
import { getDelta } from "./misc";

export type ViewMode = "2D" | "3D"

interface Props {
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


export function generateFloorStyles({ curFloor, maxFloors, mode, overrides }: Props): CSSProperties {
	// Base calculations
	const delta = getDelta(curFloor, maxFloors)

	return {
		transform: `
			translateX(${delta * (overrides?.transform?.x || 25)}px)
			translateZ(${Math.abs(delta) * (overrides?.transform?.z || 0)}px)
			rotateX(${delta * -10}deg)
		`,
		opacity: Math.max(
			0.15,
			1 - Math.abs(delta) * 0.2,
		),
		zIndex: 100 - delta,
		scale: 1 - Math.abs(delta * 0.03),
	}
}