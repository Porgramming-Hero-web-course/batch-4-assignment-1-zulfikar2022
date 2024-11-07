
class Car {
    constructor(public make: string, public model: string, public year: number) { }

    getCarAge() {
        return new Date().getFullYear() - this.year;
    }
}
