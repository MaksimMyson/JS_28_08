class Car {
    constructor(brand, model, year, enginePower) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.enginePower = enginePower;
    }
 
    displayInfo() {
      console.log(`Автомобіль: ${this.brand} ${this.model}, ${this.year} рік, потужність двигуна: ${this.enginePower} к.с.`);
    }
  }
  
  
  class PassengerCar extends Car {
    constructor(brand, model, year, enginePower, seats) {
      super(brand, model, year, enginePower);
      this.seats = seats; 
    }
  
  
    displayInfo() {
      console.log(`Легковий автомобіль: ${this.brand} ${this.model}, ${this.year} рік, потужність двигуна: ${this.enginePower} к.с., кількість місць: ${this.seats}`);
    }
  }
  
  
  class Truck extends Car {
    constructor(brand, model, year, enginePower, loadCapacity) {
      super(brand, model, year, enginePower);
      this.loadCapacity = loadCapacity; 
    }
  
    
    displayInfo() {
      console.log(`Вантажний автомобіль: ${this.brand} ${this.model}, ${this.year} рік, потужність двигуна: ${this.enginePower} к.с., вантажопідйомність: ${this.loadCapacity} т.`);
    }
  }
  

  class Bus extends Car {
    constructor(brand, model, year, enginePower, passengerCapacity) {
      super(brand, model, year, enginePower);
      this.passengerCapacity = passengerCapacity; 
    }
  

    displayInfo() {
      console.log(`Автобус: ${this.brand} ${this.model}, ${this.year} рік, потужність двигуна: ${this.enginePower} к.с., кількість пасажирів: ${this.passengerCapacity}`);
    }
  }
  

  const vehicles = [
    new PassengerCar("Toyota", "Camry", 2022, 203, 5),
    new Truck("Volvo", "FH16", 2020, 540, 20),
    new Bus("Mercedes-Benz", "Sprinter", 2023, 150, 30)
  ];
  

  vehicles.forEach(vehicle => vehicle.displayInfo());

  