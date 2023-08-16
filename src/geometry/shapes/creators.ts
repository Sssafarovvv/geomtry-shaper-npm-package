import { shapeData } from "../interfaces";

export interface circleData extends shapeData {
  type: "circle";
  radius: number;
  diameter?: number;
  area?: number;
  perimeter?: number;
}

export interface rectangleData extends shapeData {
  type: "rectangle";
  width: number;
  height: number;
  area?: number;
  perimeter?: number;
  diagonal?: number;
}

export interface triangleData extends shapeData {
  type: "triangle";
  base: number;
  height: number;
  area?: number;
  perimeter?: number;
}
