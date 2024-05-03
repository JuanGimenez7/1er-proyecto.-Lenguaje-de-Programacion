class Car {
    Constructor(plate, year, brand, model, color, picture, owner) {
        this.plate = plate;
        this.year = year;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.picture = picture;
        this.owner = owner;
    }

    // Getters
    getPlate() {
        return this.plate;
    }

    getYear() {
        return this.year;
    }

    getBrand() {
        return this.brand;
    }

    getModel() {
        return this.model;
    }

    getColor() {
        return this.color;
    }

    getPicture() {
        return this.picture;
    }

    getOwner() {
        return this.owner;
    }

    // Setters
    setPlate(plate) {
        this.plate = plate;
    }

    setYear(year) {
        this.year = year;
    }

    setBrand(brand) {
        this.brand = brand;
    }

    setModel(model) {
        this.model = model;
    }

    setColor(color) {
        this.color = color;
    }

    setPicture(picture) {
        this.picture = picture;
    }

    setOwner(owner) {
        this.owner = owner;
    }
}

class Owner {
    constructor(fname, lname, iden, tel, dir) {
        this.firstName = fname;
        this.lastName = lname;
        this.identification = iden;
        this.tel = tel;
        this.address = dir;
    }

    // Getters
    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getIdentification() {
        return this.identification;
    }

    getTel() {
        return this.tel;
    }

    getAddress() {
        return this.address;
    }

    // Setters
    setFirstName(fname) {
        this.firstName = fname;
    }

    setLastName(lname) {
        this.lastName = lname;
    }

    setIdentification(iden) {
        this.identification = iden;
    }

    setTel(tel) {
        this.tel = tel;
    }

    setAddress(dir) {
        this.address = dir;
    }
}

function getData() {
    const plate = document.getElementById("plate").value;
    const year = document.getElementById("year").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const color = document.getElementById("color").value;
    const picture = document.getElementById("picture").value;
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const identification = document.getElementById("idnumber").value;
    const tel = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const newCar = new Car(document.getElementById("plate").value,
        document.getElementById("year").value,
        document.getElementById("brand").value,
        document.getElementById("model").value,
        document.getElementById("color").value,
        document.getElementById("picture").value
    )

    const newOwner = new Owner()
}
