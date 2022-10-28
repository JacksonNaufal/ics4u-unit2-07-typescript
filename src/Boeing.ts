/**
 * The program is the class
 * for the Boeing 747.
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-19
 */

import Biplane from './Biplane'

class Boeing extends Biplane {

  // this sets the speed
  setSpeed(newSpeed: number): void {
    super.setSpeed(newSpeed * 2)
  }

  // this accelerates the boeing
  accelerate(): void {
    super.setSpeed(super.getSpeed() * 2)
  }


// exports file back to main
}
export = Boeing
