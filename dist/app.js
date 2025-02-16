"use strict";
function createUser(user) {
    return user;
}
let User = createUser({
    name: 'Ali',
    id: 123,
    email: 'abc@email.com',
    isActive: false
});
console.log(User);
function processInput(input) {
    return typeof input == 'number' ? `Number: ${input.toString()}` : `String: ${input}`;
}
let userInput = processInput(5);
console.log(userInput);
// Create a base class called Vehicle with properties for make (string), model (string), and year
// (number). Include a method called getInfo() that returns a string with the vehicle information.
// Then create two subclasses: Car and Motorcycle. The Car class should have an additional
// property for doors (number), and the Motorcycle class should have a property for hasSidecar
// (boolean). Override the getInfo() method in each subclass to include the additional information.
class Vehicle {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    doors;
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        return `${super.getInfo()}, Doors: ${this.doors}`;
    }
}
class Motorcycle extends Vehicle {
    hasSidecar;
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getInfo() {
        return `${super.getInfo()}, Has Sidecar: ${this.hasSidecar}`;
    }
}
let car = new Car('Honda', 'Civic', 2023, 4);
let motorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 2022, true);
console.log(car.getInfo());
console.log(motorcycle.getInfo());
// Create a class called BankAccount with:
// ● A private property for balance (number)
// ● A private readonly property for accountNumber (string)
// ● A constructor that initializes both properties
// ● A getter method for balance
// ● A getter method for accountNumber
// ● A method called deposit(amount: number) that adds to the balance
// ● A method called withdraw(amount: number) that subtracts from the balance but prevents
// overdrafts by throwing an error if the amount is greater than the balance
// Test the class by creating an account, making deposits and withdrawals, and trying to access
// the private properties directly.
class BankAccount {
    balance;
    accountNumber;
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    get getBalance() {
        return this.balance;
    }
    get getAccountNumber() {
        return this.accountNumber;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds. Cannot withdraw more than the available balance.");
        }
        this.balance -= amount;
    }
}
const account = new BankAccount("123456789", 1000);
console.log(`Account Number: ${account.getAccountNumber}`);
console.log(`Initial Balance: $${account.getBalance}`);
account.deposit(500);
console.log(`Balance after deposit: $${account.getBalance}`);
account.withdraw(200);
console.log(`Balance after withdrawal: $${account.getBalance}`);
// Create an abstract class called Shape with:
// ● A protected property for color (string)
// ● A constructor that sets the color
// ● An abstract method called calculateArea() that returns a number
// ● A concrete method called getColor() that returns the color
// Then create two concrete classes that extend Shape:
// ● Circle with a property for radius (number)
// ● Rectangle with properties for width (number) and height (number)
// Implement the calculateArea() method in each subclass. Then create instances of both shapes,
// calculate their areas, and get their colors.
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 4, 6);
console.log(`Circle color: ${circle.getColor()}, Area: ${circle.calculateArea().toFixed(2)}`);
console.log(`Rectangle color: ${rectangle.getColor()}, Area: ${rectangle.calculateArea()}`);
