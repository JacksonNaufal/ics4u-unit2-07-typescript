/**
 * The program is the classic
 * Vehicle stats program
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-17
 */

// Imports
import Biplane from './Biplane'
import Boeing from './Boeing'

const biplane = new Biplane() 
biplane.setSpeed(212)
console.log(biplane.getSpeed())

const boeing = new Boeing()
boeing.setSpeed(422)
console.log(boeing.getSpeed)
let x = 0

while (x < 4) {

    boeing.accelerate()
    console.log(boeing.getSpeed())

    if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2)
    } else {
        boeing.accelerate()
    }
    x++
}
    console.log(biplane.getSpeed())
    console.log('\nDone.')

