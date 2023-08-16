import { circleData } from "./creators";

class Circle implements circleData {
  type: "circle" = "circle";
  diameter!: number;

  /**
   * Initialize Circle specified radius
   * @param {number} radius
   *  */
  constructor(public radius: number) {
    this.radius = radius;
  }

  getDiameter(): number {
    this.diameter = this.radius * 2;
    return this.diameter;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  getAllData(): circleData {
    return {
      type: "circle",
      radius: this.radius,
      diameter: this.getDiameter(),
      area: this.getArea(),
      perimeter: this.getPerimeter(),
    };
  }
}

export { Circle };
