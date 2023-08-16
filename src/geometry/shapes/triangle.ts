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
  getArea(): number {
    return (this.base * this.height) / 2;
  }

  /**
   * Calculate the perimeter of the triangle.
   * Note: The perimeter calculation can be accesed by different given infornation, so this method requires other implementations.
   * @returns {number}
   */
  getPerimeter(): number {
    const hypotenuse = Math.sqrt(this.base ** 2 + this.height ** 2);

    const perimeter = this.base + hypotenuse + hypotenuse;

    return perimeter;
  }

  /**
   * Get all data about the triangle, including base, height, and area.
   * @returns {triangleData} - An object containing triangle data.
   */
  getAllData(): triangleData {
    return {
      type: "triangle",
      base: this.base,
      height: this.height,
      area: this.getArea(),
      perimeter: this.getPerimeter(),
    };
  }
}

export { Triangle };
