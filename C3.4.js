// Задание 4

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

// Прибор 1
function Iron(name, brand, power, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.functionality = functionality;
    this.isPlugged = true;
}

Iron.prototype = new ElectricalAppliance();

// Прибор 2
function Oven(name, brand, power, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.functionality = functionality;
    this.isPlugged = false;
}

Oven.prototype = new ElectricalAppliance();

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


