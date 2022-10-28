/**
 * The program is the class
 * for the Biplane
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-27
 */

class Biplane {
  // protected variable used between classes
  protected speed = 0

  // sets the speed (setter)
  setSpeed(newSpeed: number): void {
    this.speed = newSpeed
  }

  // sets the speed (getter0
  getSpeed(): number {
    return this.speed
  }
}

// exports file back to main
export = Biplane
