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
	const postition = curFloor - maxFloors
	const delta = Math.abs(postition)
	const curve = Math.pow(delta, 1.6)
	console.log(`Floor: ${curFloor} pos: ${postition} delta: ${delta} curve: ${curve}`)

	return {
		transform: `
			translateX(${postition * (overrides?.transform?.x || 25)}px)
			translateY(${postition * (overrides?.transform?.y || 0)}px)
			translateZ(${postition * (overrides?.transform?.z || 0)}px)
		`,
		zIndex: 100 - delta,
		scale: 1 - Math.abs(delta * 0.03),
	}
}