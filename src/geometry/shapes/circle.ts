import { circleData } from "./creators";

class Circle implements circleData {
  type: "circle" = "circle";
  diameter!: number;

  /**
   * Initialize a Circle with a specified radius.
   * @param {number} radius - The radius of the circle.
   */
  constructor(public radius: number) {
    this.radius = radius;
  }

  /**
   * Get the diameter of the circle.
   * @returns {number} - The diameter of the circle.
   */
  async getDiameter(): Promise<number> {
    this.diameter = this.radius * 2;
    return this.diameter;
  }

  /**
   * Calculate the area of the circle.
   * @returns {number} - The area of the circle.
   */
  async getArea(): Promise<number> {
    return Math.PI * this.radius * this.radius;
  }

  /**
   * Calculate the perimeter (circumference) of the circle.
   * @returns {number} - The perimeter of the circle.
   */
  async getPerimeter(): Promise<number> {
    return 2 * Math.PI * this.radius;
  }

  /**
   * Get all data about the circle, including radius, diameter, area, and perimeter.
   * @returns {circleData} - An object containing circle data.
   */
  async getAllData(): Promise<circleData> {
    const [diameter, area, perimeter] = await Promise.all([
      this.getDiameter(),
      this.getArea(),
      this.getPerimeter(),
    ]);

    return {
      type: "circle",
      radius: this.radius,
      diameter,
      area,
      perimeter,
    };
  }
}

export { Circle };
