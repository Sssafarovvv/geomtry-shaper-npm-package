import { rectangleData } from "./creators";
class Rectangle implements rectangleData {
  type!: "rectangle";

  /**
   * Initialize a Rectangle with specified width and height.
   * @param {number} width - The width of the rectangle.
   * @param {number} height - The height of the rectangle.
   */
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }

  /**
   * Calculate the area of the rectangle.
   * @returns {number} - The area of the rectangle.
   */
  getArea(): number {
    return this.width * this.height;
  }

  /**
   * Calculate the perimeter of the rectangle.
   * @returns {number} - The perimeter of the rectangle.
   */
  getPerimeter(): number {
    return (this.width + this.height) * 2;
  }

  /**
   * Calculate the diagonal of the rectangle.
   * @returns {number} - The diagonal of the rectangle.
   */
  getDiagonal(): number {
    return Math.sqrt(this.width * this.width + this.height * this.height);
  }

  /**
   * Get all data about the rectangle, including width, height, area, perimeter, and diagonal.
   * @returns {rectangleData} - An object containing rectangle data.
   */
  getAllData(): rectangleData {
    return {
      type: "rectangle",
      width: this.width,
      height: this.height,
      area: this.getArea(),
      perimeter: this.getPerimeter(),
      diagonal: this.getDiagonal(),
    };
  }
}

export { Rectangle };
