class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }
    eats(name) {
        console.log(`Animal ${name} Eating...`)
    }
    jumps() {
        console.log("Jumping...")
    }
}


class Lion extends Animal { // inheritance
    constructor(name, sound) {
        super(name) // calling parent class constructor
        this.sound = sound
        console.log(`Lion is created and he ${sound}...`)
    }

    eats(name) { // method overriding
        super.eats(name)
        console.log(`Lion ${name} is eating...`)
    }
}

// let a = new Animal("Bunny");
// console.log(a)

// let l = new Lion("Shera", "Roars")
// console.log(l)

// l.eats()
// l.jumps()


