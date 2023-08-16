import { triangleData } from "./creators";

class Triangle implements triangleData {
  type!: "triangle";

  /**
   * Initialize a Triangle with specified base and height.
   * @param {number} base - The base length of the triangle.
   * @param {number} height - The height of the triangle.
   */
  constructor(public base: number, public height: number) {
    this.base = base;
    this.height = height;
  }

  /**
   * Calculate the area of the triangle.
   * @returns {number} - The area of the triangle.
   */
  async getArea(): Promise<number> {
    return (this.base * this.height) / 2;
  }

  /**
   * Calculate the perimeter of the triangle.
   * Note: The perimeter calculation can be accessed with different given information, so this method requires other implementations.
   * @returns {number}
   */
  async getPerimeter(): Promise<number> {
    const hypotenuse = Math.sqrt(this.base ** 2 + this.height ** 2);
    const perimeter = this.base + hypotenuse + hypotenuse;
    return perimeter;
  }

  /**
   * Get all data about the triangle, including base, height, area, and perimeter.
   * @returns {triangleData} - An object containing triangle data.
   */
  async getAllData(): Promise<triangleData> {
    const [area, perimeter] = await Promise.all([this.getArea(), this.getPerimeter()]);

    return {
      type: "triangle",
      base: this.base,
      height: this.height,
      area,
      perimeter,
    };
  }
}

export { Triangle };
