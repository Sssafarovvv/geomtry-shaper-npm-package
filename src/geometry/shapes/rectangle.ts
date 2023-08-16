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
  async getArea(): Promise<number> {
    return this.width * this.height;
  }

  /**
   * Calculate the perimeter of the rectangle.
   * @returns {number} - The perimeter of the rectangle.
   */
  async getPerimeter(): Promise<number> {
    return (this.width + this.height) * 2;
  }

  /**
   * Calculate the diagonal of the rectangle.
   * @returns {number} - The diagonal of the rectangle.
   */
  async getDiagonal(): Promise<number> {
    return Math.sqrt(this.width * this.width + this.height * this.height);
  }

  /**
   * Get all data about the rectangle, including width, height, area, perimeter, and diagonal.
   * @returns {rectangleData} - An object containing rectangle data.
   */
  async getAllData(): Promise<rectangleData> {
    const [area, perimeter, diagonal] = await Promise.all([
      this.getArea(),
      this.getPerimeter(),
      this.getDiagonal(),
    ]);

    return {
      type: "rectangle",
      width: this.width,
      height: this.height,
      area,
      perimeter,
      diagonal,
    };
  }
}

export { Rectangle };
