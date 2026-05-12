import { type CSSProperties } from "react";
import { type ViewMode } from "@/types/Rooms";
import { clamp } from "./misc";
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


export function generateFloorStyles({ floor, curFloor, maxFloors, containerSize, mode, overrides }: Props): CSSProperties {
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
	const unit = containerSize.height / 100
	const strength = delta === 0 ? 0 : Math.exp((1 - (delta - 1)) * 0.8);

	if (mode === "2D") return {
		opacity: delta === 0 ? 1 : 0,
		pointerEvents: delta === 0 ? "auto" : "none",
		height: "100%",
		width: "100%",
		left: 0
	}

	return {
		transform: `
			translateX(${0}px)
			translateY(${postition * strength * transform.y}px)
			translateZ(${postition * strength * (unit * transform.z)}px)
			rotateX(${postition * rotate.x}deg)
			rotateY(${rotate.y}deg)
			rotateZ(${rotate.z}deg)
		`,
		zIndex: 100 - delta,
		transformOrigin: "top",
		opacity: delta ? clamp(strength, 0, 0.5) : 1,
		height: "100%",
		width: "80%",
		left: "15%"
	}
}