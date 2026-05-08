import { CSSProperties } from "react";

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
	const postition = curFloor - maxFloors
	const delta = Math.abs(postition)
	const curve = Math.pow(delta, 1.6)

	return {
		transform: `
			translateX(${postition * (overrides?.transform?.x || 0)}px)
			translateY(${postition * (overrides?.transform?.y || 0)}px)
			translateZ(${delta * (overrides?.transform?.z || 0)}px)
			rotateX(${postition * (overrides?.rotate?.x || 0)}deg)
			rotateY(${postition * (overrides?.rotate?.y || 0)}deg)
			rotateZ(${postition * (overrides?.rotate?.z || 0)}deg)
		`,
		zIndex: 100 - delta,
		scale: 1 - Math.abs(delta * 0.03),
	}
}