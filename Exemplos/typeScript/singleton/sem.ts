class FakeDatabase {
    private id: number;
    constructor() {
        this.id = Math.random();
        console.log("Criando NOVA conexão com banco:", this.id);
    }
}

const db1 = new FakeDatabase();
const db2 = new FakeDatabase();

console.log("\nComparação sem Singleton:");
console.log("db1 === db2 ?", db1 === db2);
