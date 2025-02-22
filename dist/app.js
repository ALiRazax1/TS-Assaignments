"use strict";
// Create an interface called User with properties for id (number), name (string), email (string), and
// isActive (boolean). Then, create a function called createUser that takes a user object of type
// User and returns it. Finally, write code to create a new user and call the function.
function createUser(user) {
    return user;
}
let User = createUser({
    name: 'Ali',
    id: 123,
    email: 'abc@email.com',
    isActive: false
});
console.log("Question 01");
console.log(User);
function processInput(input) {
    return typeof input == 'number' ? `Number: ${input.toString()}` : `String: ${input}`;
}
let userInput = processInput(5);
console.log("Question 02");
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
let motorcycle = new Motorcycle('Honda', 'CBR500R', 2022, false);
console.log("Question 03");
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
            console.log("Deposit amount must be positive.");
            ;
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
            ;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds. Cannot withdraw more than the available balance.");
            ;
        }
        this.balance -= amount;
    }
}
const account = new BankAccount("4568126389", 1000);
console.log("Question 04");
console.log(`Account Number: ${account.getAccountNumber}`);
console.log(`Initial Balance: $${account.getBalance}`);
account.deposit(0);
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
console.log("Question 05");
console.log(`Circle color: ${circle.getColor()}, Area: ${circle.calculateArea().toFixed(2)}`);
console.log(`Rectangle color: ${rectangle.getColor()}, Area: ${rectangle.calculateArea()}`);
function createProduct(product) {
    return product;
}
const newProduct = {
    id: 1,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics"
};
const createdProduct = createProduct(newProduct);
console.log("Question 06");
console.log(createdProduct);
//   Create a base class Employee with name (string), salary (number), and a
//   method getDetails() that returns the employee&#39;s name and salary. Then, create
//   two subclasses: Developer with an additional property programmingLanguage
//   (string) and an overridden getDetails() method, and Designer with an additional
//   property toolUsed (string) and an overridden getDetails() method. Create
//   instances of both classes and call getDetails() on each.
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }
}
class Developer extends Employee {
    programmingLanguage;
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return `${super.getDetails()}, Programming Language: ${this.programmingLanguage}`;
    }
}
class Designer extends Employee {
    toolUsed;
    constructor(name, salary, toolUsed) {
        super(name, salary);
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return `${super.getDetails()}, Tool Used: ${this.toolUsed}`;
    }
}
const developer = new Developer("Ali", 80000, "TypeScript");
const designer = new Designer("Ahmed", 75000, "Figma");
console.log("Question 07");
console.log(developer.getDetails());
console.log(designer.getDetails());
//   Create a class Student with a public property name (string), a private property
// grades (array of numbers), a protected property school (string), and a readonly
// property studentID (number) that is initialized in the constructor. Implement
// methods to add a grade to the grades array and get the average grade. Try
// accessing the properties from inside and outside the class to test access
// modifiers.
class Student {
    name;
    grades = [];
    school;
    studentID;
    constructor(name, school, studentID) {
        this.name = name;
        this.school = school;
        this.studentID = studentID;
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    getAverageGrade() {
        if (this.grades.length === 0)
            return 0;
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
}
const student = new Student("John Doe", "High School", 12345);
student.addGrade(85);
student.addGrade(90);
student.addGrade(78);
console.log("Question 09");
console.log(`Student Name: ${student.name}`);
console.log(`Student ID: ${student.studentID}`);
console.log(`Average Grade: ${student.getAverageGrade()}`);
//   Create an abstract class Animal with a protected property species (string), a
// constructor that sets the species, an abstract method makeSound() that returns a
// string, and a concrete method getSpecies() that returns the species. Then, create
// two classes: Dog with a makeSound() method that returns &quot;Woof!&quot;, and Cat with
// a makeSound() method that returns &quot;Meow!&quot;. Create instances of both classes,
// call makeSound(), and getSpecies().
class Animal {
    species;
    constructor(species) {
        this.species = species;
    }
    getSpecies() {
        return this.species;
    }
}
class Dog extends Animal {
    constructor() {
        super("Dog");
    }
    makeSound() {
        return "Woof!";
    }
}
class Cat extends Animal {
    constructor() {
        super("Cat");
    }
    makeSound() {
        return "Meow!";
    }
}
const dog = new Dog();
const cat = new Cat();
console.log("Question 10");
console.log(`${dog.getSpecies()} says: ${dog.makeSound()}`);
console.log(`${cat.getSpecies()} says: ${cat.makeSound()}`);
//   Create a generic function findIndex&lt;T&gt;(arr: T[], value: T): number that takes an
//   array of any type and a value to search for. The function should return the index
//   of the value if found; otherwise, return -1. Call this function with different types of
//   arrays (e.g., an array of numbers, an array of strings) and log the results..
function findIndex(arr, value) {
    return arr.indexOf(value);
}
const numberArray = [10, 20, 30, 40, 50];
const stringArray = ["apple", "banana", "cherry", "date"];
console.log("Question 11");
console.log(findIndex(numberArray, 30));
console.log(findIndex(numberArray, 100));
console.log(findIndex(stringArray, "cherry"));
console.log(findIndex(stringArray, "grape"));
function useVehicle(vehicle) {
    if ("drive" in vehicle) {
        console.log(vehicle.drive());
    }
    else {
        console.log(vehicle.ride());
    }
}
const myCar = {
    drive: () => "Driving a car!"
};
const myBike = {
    ride: () => "Riding a bike!"
};
console.log("Question 12");
useVehicle(myCar);
useVehicle(myBike);
function describeEmployee(emp) {
    console.log(`Name: ${emp.name}, Age: ${emp.age}, Job Title: ${emp.jobTitle}, Salary: ${emp.salary}`);
    console.log(emp.getDetails());
}
const fullTimeEmp = {
    name: "Ali",
    age: 25,
    jobTitle: "Software Engineer",
    salary: 70000,
    getDetails() {
        return `Employee ${this.name} works as a ${this.jobTitle} with a salary of ${this.salary}`;
    }
};
console.log("Question 13");
describeEmployee(fullTimeEmp);
function makeSound(pet) {
    if ("bark" in pet) {
        console.log(pet.bark());
    }
    else {
        console.log(pet.meow());
    }
}
const myDog = {
    bark: () => "Woof!"
};
const myCat = {
    meow: () => "Meow!"
};
console.log("Question 14");
makeSound(myDog);
makeSound(myCat);
class CIRCLE {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculate_area() {
        return Math.PI * this.radius * this.radius;
    }
    getType() {
        return "Circle";
    }
}
const myCircle = new CIRCLE(5);
console.log("Question 15");
console.log(`Type: ${myCircle.getType()}`);
console.log(`Area: ${myCircle.calculate_area()}`);
