class FakeDatabaseSingleton {
    private static instance: FakeDatabaseSingleton;
    private id: number;

    constructor() {
        if (FakeDatabaseSingleton.instance) {
            return FakeDatabaseSingleton.instance;
        }

        this.id = Math.random();
        console.log("Criando conexão ÚNICA com banco:", this.id);

        FakeDatabaseSingleton.instance = this;
    }
}

const dbA = new FakeDatabaseSingleton();
const dbB = new FakeDatabaseSingleton();

console.log("\nComparação com Singleton:");
console.log("dbA === dbB ?", dbA === dbB);
