import { Circle } from "./shapes/circle";
import { Rectangle } from "./shapes/rectangle";
import { Triangle } from "./shapes/triangle";

export interface shapeData {
  type: string;
  shape?: Shape;
}

export type EventListener = (event: shapeData) => void;
export type Shape = Rectangle | Triangle | Circle;
