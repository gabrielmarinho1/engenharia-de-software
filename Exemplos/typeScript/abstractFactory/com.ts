interface Vehicle {
    drive(): void;
}

interface VehicleFactory {
    createVehicle(): Vehicle;
}

class BasicCar implements Vehicle {
    drive() {
        console.log("Dirigindo um carro Básico");
    }
}

class LuxuryCar implements Vehicle {
    drive() {
        console.log("Dirigindo um carro de Luxo");
    }
}

class BasicCarFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new BasicCar();
    }
}

class LuxuryCarFactory implements VehicleFactory {
    createVehicle(): Vehicle {
        return new LuxuryCar();
    }
}

class VehicleApplication {
    constructor(private factory: VehicleFactory) {}

    run() {
        const vehicle = this.factory.createVehicle();
        vehicle.drive();
    }
}

const appA = new VehicleApplication(new BasicCarFactory());
appA.run();

const appB = new VehicleApplication(new LuxuryCarFactory());
appB.run();
