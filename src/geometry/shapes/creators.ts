import { IShapeData } from "../interfaces";

export interface circleData extends IShapeData {
  type: "circle";
  radius: number;
  diameter?: number;
  area?: number;
  perimeter?: number;
}

export interface rectangleData extends IShapeData {
  type: "rectangle";
  width: number;
  height: number;
  area?: number;
  perimeter?: number;
  diagonal?: number;
}

export interface triangleData extends IShapeData {
  type: "triangle";
  base: number;
  height: number;
  area?: number;
  perimeter?: number;
}
