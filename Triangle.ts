/*
 * Triangle class.
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-04-21
 */

export default class Triangle {
  // variables
  private sideA: number
  private sideB: number
  private sideC: number

  /*
  * Constructor.
  */
  constructor(side1: number, side2: number, side3: number) {
    this.sideA = side1
    this.sideB = side2
    this.sideC = side3
  }

  /*
  * Getter for sideA
  */
  public get sideA() {
    return this.sideA
  }

  /*
  * Getter for sideB
  */
  public get sideB() {
    return this.sideB
  }

  /*
  * Getter for sideC
  */
  public get sideC() {
    return this.sideC
  }

  /*
  * Checks if the triangle has valid dimensions
  */
  public isValid(): boolean {
  let isValid: boolean = true
    if ((this.sideA + this.sideB) < this.sideC) {
      isValid = false
    } else if ((this.sideB + this.sideC) < this.sideA) {
      isValid = false
    } else if ((this.sideC + this.sideA) < this.sideB) {
      isValid = false
    }
    return isValid
  }

  /*
  * Calculates the area
  */
  public area(): number {
    if (this.isValid() === false) {
      return -1
    } else {
      return Math.sqrt(this.semiPerimeter()
        * (this.semiPerimeter() - this.sideA)
        * (this.semiPerimeter() - this.sideB)
        * (this.semiPerimeter() - this.sideC)
      )
    }
  }

  /*
  * Finds the type of triangle
  */
  public getType(): string {
    if (this.isValid() === false) {
      return -1
    } else {
      let triangleType: string
      if (
        this.sideA === this.sideB &&
        this.sideB === this.sideC &&
        this.sideC === this.sideA
      ) {
        triangleType = "Equilateral triangle"
      } else if (
        this.angle(1) === (Math.PI / 2) ||
        this.angle(2) === (Math.PI / 2) ||
        this.angle(3) === (Math.PI / 2)
      ) {
        triangleType = "Right angle triangle"
      } else if (
        this.sideA === this.sideB ||
        this.sideB === this.sideC ||
        this.sideC === this.sideA
      ) {
        triangleType = "Isosceles triangle"
      } else if (this.sideA != this.sideB != this.sideC) {
        triangleType = "Scalene triangle"
      }
      return triangleType
    }
  }

  /*
  * Calculates the semi-perimeter
  */
  public semiPerimeter(): number {
    if (this.isValid() === false) {
      return -1
    } else {
      return (this.sideA + this.sideB + this.sideC) / 2
    }
  }

  /*
  * Calculates each angle of the triangle
  */
  public angle(angleNumber: number): number {
    if (this.isValid() === false) {
      return -1
    } else {
      let angle: number
      if (angleNumber === 1) {
        angle = Math.acos(
          ((this.sideB ** 2) + (this.sideC ** 2) - (this.sideA ** 2))
          / (2 * this.sideB * this.sideC)
        )
      } else if (angleNumber === 2) {
        angle = Math.acos(
          ((this.sideC ** 2) + (this.sideA ** 2) - (this.sideB ** 2))
          / (2 * this.sideC * this.sideA)
        )
      } else if (angleNumber === 3) {
        angle = Math.acos(
          ((this.sideA ** 2) + (this.sideB ** 2) - (this.sideC ** 2))
          / (2 * this.sideA * this.sideB)
        )
      }
      return angle
    }
  }

  /*
  * Calculates each height of the triangle
  */
  public height(sideNumber: number): number {
    if (this.isValid() === false) {
      return -1
    } else {
      let height: number
      if (sideNumber === 1) {
        height = 2 * this.area() / this.sideA
      } else if (sideNumber === 2) {
        height = 2 * this.area() / this.sideB
      } else if (sideNumber === 3) {
        height = 2 * this.area() / this.sideC
      }
      return height
    }
  }

  /*
  * Calculates the inner circle radius
  */
  public innerCircleRadius(): number {
    if (this.isValid() === false) {
      return -1
    } else {
      return this.area() / this.semiPerimeter()
    }
  }

  /*
  * Calculates the circumsicle radius
  */
  public circumsicleRadius(): number {
    if (this.isValid() === false) {
      return -1
    } else {
      return (this.sideA * this.sideB * this.sideC) / (4 * this.area())
    }
  }
}
