const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
    console.log('tutorial event has occurred');
})

eventEmitter.on('tutorial1', (num1, num2) => {
    console.log(num1 + num2);
})

eventEmitter.emit('tutorial');
eventEmitter.emit('tutorial1', 1, 1);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }

}

let pedro = new Person('Pedro');
let michele = new Person('Michele');
let fullOfEnergy = new Person('fullOfEnergy');
fullOfEnergy.on('name', () => {
    console.log('my name is ' + fullOfEnergy.name)
})

michele.on('name', () => {
    console.log('my name is ' + michele.name)
})

pedro.on('name', () => {
    console.log('my name is ' + pedro.name)
});

pedro.emit('name');
michele.emit('name');
fullOfEnergy.emit('name');