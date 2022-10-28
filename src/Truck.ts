/**
 * The program is the class
 * for the Boeing 747.
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-19
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  // this sets the speed 
  private licensePlate: string

  constructor(color: string, licensePlate: string, maxSpeed: number) {
    super(color, maxSpeed)
    this.licensePlate = licensePlate
  }

  getLicensePlate(): string {
    return this.licensePlate
   }

  setLicensePlate(licensePlateNew: string): void {
    this.licensePlate = licensePlateNew
  }

  provideAir(airPressure: number): void {
      super.setSpeed(super.getSpeed() - airPressure / 2)

      if (super.getSpeed() < 0) {
              super.setSpeed(0)
      }
    }

    status(): void {
     console.log(`
     ---> Speed: ${super.getSpeed()}
     ---> MaxSpeed: ${super.getMaxSpeed()}
     ---> Color: ${super.getColor()}
     ---> License Plate: ${this.licensePlate}
    `)
    }

}


  // exports file back to main
export = Truck
