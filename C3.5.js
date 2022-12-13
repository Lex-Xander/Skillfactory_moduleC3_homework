// Задание 5

class ElectricalAppliance {
    constructor(name, power){
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    // метод, который определяет прибор как включенный в розетку
    plugIn() {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    // метод, который определяет прибор как выключеный из розетки
    unplug() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    }
}
// Прибор 1
class Iron extends ElectricalAppliance {
    constructor (name, brand, power, functionality) {
        super(name, power);
        this.brand = brand;
        this.functionality = functionality;
        this.isPlugged = true;
    }
}

// Прибор 2
class Oven extends ElectricalAppliance {
    constructor(name, brand, power, functionality) {
        super(name, power);
        this.brand = brand;
        this.functionality = functionality;
        this.isPlugged = false;
    }
}

// экземпляр утюга
const myIron = new Iron("Iron", "Philips", 1500, "Steam");

// экземпляр печи
const electricOven = new Oven("Multi Oven", "Deloghi", 2000, "Сooking");

// отключить утюг из розетки
myIron.unplug();

// включить печь в розетку
electricOven.plugIn();

// результат
console.log(electricOven)
console.log(myIron)
