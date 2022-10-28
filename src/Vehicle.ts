/**
 * The program is the class
 * for the Biplane
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-27
 */

class Vehicle {
  // protected variable used between classes
  private speed = 0
  private color: string
  private readonly maxSpeed: number

  constructor(color: string, maxSpeed: number) {
    this.color = color
    this.maxSpeed = maxSpeed
  }

  getColor(): string {
    return this.color
  }

  setColor(newColor: string) {
    this.color = newColor
  }

  setSpeed(newSpeed: number): void {
    this.speed = newSpeed
  }
  getSpeed(): number {
    return this.speed
  }

  getMaxSpeed(): number {
    return this.maxSpeed
  }

  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  brake(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

// exports file back to main
export = Vehicle
