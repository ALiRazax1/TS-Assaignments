// Create an interface called User with properties for id (number), name (string), email (string), and
// isActive (boolean). Then, create a function called createUser that takes a user object of type
// User and returns it. Finally, write code to create a new user and call the function.

interface User {
    name:string,
    id:number,
    email:string,
    isActive:boolean
}
function createUser(user:User){
return user
}
let User = createUser({
    name:'Ali',
    id:123,
    email:'abc@email.com',
    isActive:false
})
console.log("Question 01");
console.log(User);


// Create a type called Input that can be either a number or a string. Then write a function called
// processInput that takes an argument of type Input and returns a string. If the input is a number,
// convert it to a string and prepend &quot;Number: &quot; to it. If the input is already a string, prepend
// &quot;String: &quot; to it. Use type guards to check the type of input.
type Input = string | number
function processInput(input:Input){
    return typeof input == 'number'? `Number: ${input.toString()}`  :`String: ${input}` 
}
let userInput = processInput(5)
console.log("Question 02");
console.log(userInput);

// Create a base class called Vehicle with properties for make (string), model (string), and year
// (number). Include a method called getInfo() that returns a string with the vehicle information.
// Then create two subclasses: Car and Motorcycle. The Car class should have an additional
// property for doors (number), and the Motorcycle class should have a property for hasSidecar
// (boolean). Override the getInfo() method in each subclass to include the additional information.

class Vehicle {
    constructor(
        public make:string,
        public model:string,
        public year:number
    ){}
    getInfo(){
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
    }
}

class Car extends Vehicle{
    constructor(
        make:string,
        model:string,
        year:number,
        public doors:number
    ){
        super(make,model,year)
    }
    getInfo(){
        return `${super.getInfo()}, Doors: ${this.doors}`
    }
}
class Motorcycle extends Vehicle{
    constructor(
        make:string,
        model:string,
        year:number,
        public hasSidecar:boolean
    ){
        super(make,model,year)
    }
    getInfo(){
        return `${super.getInfo()}, Has Sidecar: ${this.hasSidecar}`
    }
}
let car = new Car('Honda','Civic',2023,4)
let motorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 2022, true)
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
    private balance: number;
    private readonly accountNumber: string;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    get getBalance(): number {
        return this.balance;
    }

    get getAccountNumber(): string {
        return this.accountNumber;
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Deposit amount must be positive.");
            ;
        }
        this.balance += amount;
    }

    withdraw(amount: number): void {
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

abstract class Shape {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract calculateArea(): number;

    getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 4, 6);
console.log("Question 05");

console.log(`Circle color: ${circle.getColor()}, Area: ${circle.calculateArea().toFixed(2)}`);
console.log(`Rectangle color: ${rectangle.getColor()}, Area: ${rectangle.calculateArea()}`);