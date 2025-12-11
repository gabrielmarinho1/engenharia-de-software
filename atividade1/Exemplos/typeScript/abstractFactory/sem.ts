// --- Produtos (Carros) ---

class PopularCar {
    drive() {
        console.log("Dirigindo um carro Popular");
    }
}

class SportsCar {
    drive() {
        console.log("Dirigindo um carro Esportivo");
    }
}

// --- Código SEM Abstract Factory ---

class CarService {
    createCar(type: string) {
        if (type === "popular") {
            return new PopularCar();
        }
        if (type === "sports") {
            return new SportsCar();
        }

        throw new Error("Tipo de carro inválido!");
    }
}

// --- Uso ---
const service = new CarService();

const car1 = service.createCar("popular");
car1.drive();

const car2 = service.createCar("sports");
car2.drive();
