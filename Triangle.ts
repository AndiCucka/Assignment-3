/*
 * Triangle class.
 *
 * @author  Andi Cucka
 * @version 1.0
 * @since   2024-04-21
 */

export default class Triangle {
  // variables
  private sideAValue: number
  private sideBValue: number
  private sideCValue: number

  /*
  * Constructor.
  */
  constructor(side1: number, side2: number, side3: number) {
    this.sideAValue = side1
    this.sideBValue = side2
    this.sideCValue = side3
  }

  /*
  * Getter for sideA
  */
  public get sideA() {
    return this.sideAValue
  }

  /*
  * Getter for sideB
  */
  public get sideB() {
    return this.sideBValue
  }

  /*
  * Getter for sideC
  */
  public get sideC() {
    return this.sideCValue
  }

  /*
  * Checks if the triangle has valid dimensions
  */
  public isValid(): boolean {
    let isValid: boolean = true
    if ((this.sideAValue + this.sideBValue) < this.sideCValue) {
      isValid = false
    } else if ((this.sideBValue + this.sideCValue) < this.sideAValue) {
      isValid = false
    } else if ((this.sideCValue + this.sideAValue) < this.sideBValue) {
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
        * (this.semiPerimeter() - this.sideAValue)
        * (this.semiPerimeter() - this.sideBValue)
        * (this.semiPerimeter() - this.sideCValue)
      )
    }
  }

  /*
  * Finds the type of triangle
  */
  public getType(): string {
    if (this.isValid() === false) {
      return "Invalid Triangle"
    } else {
      let triangleType: string
      if (
        this.sideAValue === this.sideBValue &&
        this.sideBValue === this.sideCValue &&
        this.sideCValue === this.sideAValue
      ) {
        triangleType = "Equilateral triangle"
      } else if (
        this.angle(1) === (Math.PI / 2) ||
        this.angle(2) === (Math.PI / 2) ||
        this.angle(3) === (Math.PI / 2)
      ) {
        triangleType = "Right angle triangle"
      } else if (
        this.sideAValue === this.sideBValue ||
        this.sideBValue === this.sideCValue ||
        this.sideCValue === this.sideAValue
      ) {
        triangleType = "Isosceles triangle"
      } else {
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
      return (this.sideAValue + this.sideBValue + this.sideCValue) / 2
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
          ((this.sideBValue ** 2) + (this.sideCValue ** 2) - (this.sideAValue ** 2))
          / (2 * this.sideBValue * this.sideCValue)
        )
      } else if (angleNumber === 2) {
        angle = Math.acos(
          ((this.sideCValue ** 2) + (this.sideAValue ** 2) - (this.sideBValue ** 2))
          / (2 * this.sideCValue * this.sideAValue)
        )
      } else {
        angle = Math.acos(
          ((this.sideAValue ** 2) + (this.sideBValue ** 2) - (this.sideCValue ** 2))
          / (2 * this.sideAValue * this.sideBValue)
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
        height = 2 * this.area() / this.sideAValue
      } else if (sideNumber === 2) {
        height = 2 * this.area() / this.sideBValue
      } else {
        height = 2 * this.area() / this.sideCValue
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
      return (this.sideAValue * this.sideBValue * this.sideCValue) / (4 * this.area())
    }
  }
}