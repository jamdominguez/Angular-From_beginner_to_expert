export class Xmen {
    constructor(
        public name: string,
        public key: string
    ) { }

    print() {
        console.log(`${this.name} - ${this.key}`);
    }
}