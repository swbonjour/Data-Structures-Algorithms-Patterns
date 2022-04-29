class Singletone {
    private static instance: Singletone;

    private constructor() {};

    public static getInstance(): Singletone {
        if(!Singletone.instance) {
            Singletone.instance = new Singletone();
        }

        return Singletone.instance;
    }
}

const client1 = Singletone.getInstance();
const client2 = Singletone.getInstance();

console.log(client1 == client2);