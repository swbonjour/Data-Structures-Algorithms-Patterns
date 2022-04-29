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