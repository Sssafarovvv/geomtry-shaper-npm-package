# Shape Library

Welcome to the Shape Library! This library provides classes for different geometric shapes, including Rectangle, Circle, and Triangle. These classes allow you to perform various calculations and retrieve information about the shapes.

## Table of contents

0. [Installation](#Installation)
1. [Usage](#Usage)
2. [Rectangle](#Rectangle)
3. [Circle](#Circle)

## Installation

To use the Shape Library in your project, you can install it using npm:

npm install shape-library

## Usage
# Rectangle
The Rectangle class represents a rectangle with a specified width and height.

Methods:
constructor(width: number, height: number): Initializes a new Rectangle instance with the given width and height.

getArea(): number: Calculates the area of the rectangle.

getPerimeter(): number: Calculates the perimeter of the rectangle.

getDiagonal(): number: Calculates the diagonal length of the rectangle.

getAllData(): rectangleData: Retrieves all data about the rectangle, including width, height, area, perimeter, and diagonal.

import { Rectangle } from 'shapes-library';

const rectangle = new Rectangle(10, 5);
const area = rectangle.getArea();
const perimeter = rectangle.getPerimeter();
const diagonal = rectangle.getDiagonal();
const allData = rectangle.getAllData();

# Circle
The Circle class represents a circle with a specified radius.

Methods:
constructor(radius: number): Initializes a new Circle instance with the given radius.

getDiameter(): number: Calculates the diameter of the circle.

getArea(): number: Calculates the area of the circle.

getCircumference(): number: Calculates the circumference (perimeter) of the circle.

getAllData(): circleDataWithExtras: Retrieves all data about the circle, including radius, diameter, area, and circumference.

import { Circle } from 'shapes-library';

const circle = new Circle(5);
const area = circle.getArea();
const circumference = circle.getCircumference();
const allData = circle.getAllData();
# Triangle
The Triangle class represents a triangle with a specified base and height.

Methods:
constructor(base: number, height: number): Initializes a new Triangle instance with the given base and height.

getArea(): number: Calculates the area of the triangle.

getAllData(): triangleData: Retrieves all data about the triangle, including base, height, and area.

import { Triangle } from 'shapes-library';

const triangle = new Triangle(8, 6);
const area = triangle.getArea();
const allData = triangle.getAllData();