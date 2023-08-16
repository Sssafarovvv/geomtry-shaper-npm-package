import { Circle } from "./shapes/circle";
import { Rectangle } from "./shapes/rectangle";
import { Triangle } from "./shapes/triangle";

export interface IShapeData {
  type: string;
  shape?: Shape;
}

export type EventListener = (event: IShapeData) => void;
export type Shape = Rectangle | Triangle | Circle;
