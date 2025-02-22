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
let motorcycle = new Motorcycle('Honda', 'CBR500R', 2022, false)
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

// Create an interface called Product with the following properties: id (number),
// name (string), price (number), and category (string). Then, create a function
// createProduct that accepts an object of type Product and returns it. Finally,
// create a new product object and pass it to createProduct().

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  function createProduct(product: Product): Product {
    return product;
  }
  
  const newProduct: Product = {
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
    constructor(public name: string, public salary: number) {}
  
    getDetails(): string {
      return `Name: ${this.name}, Salary: ${this.salary}`;
    }
  }
  
  class Developer extends Employee {
    constructor(name: string, salary: number, public programmingLanguage: string) {
      super(name, salary);
    }
  
    getDetails(): string {
      return `${super.getDetails()}, Programming Language: ${this.programmingLanguage}`;
    }
  }
  
  class Designer extends Employee {
    constructor(name: string, salary: number, public toolUsed: string) {
      super(name, salary);
    }
  
    getDetails(): string {
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
    public name: string;
    private grades: number[] = [];
    protected school: string;
    readonly studentID: number;
  
    constructor(name: string, school: string, studentID: number) {
      this.name = name;
      this.school = school;
      this.studentID = studentID;
    }
  
    addGrade(grade: number): void {
      this.grades.push(grade);
    }
  
    getAverageGrade(): number {
      if (this.grades.length === 0) return 0;
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


abstract class Animal {
    protected species: string;
  
    constructor(species: string) {
      this.species = species;
    }
  
    abstract makeSound(): string;
  
    getSpecies(): string {
      return this.species;
    }
  }
  
  class Dog extends Animal {
    constructor() {
      super("Dog");
    }
  
    makeSound(): string {
      return "Woof!";
    }
  }
  
  class Cat extends Animal {
    constructor() {
      super("Cat");
    }
  
    makeSound(): string {
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

  function findIndex<T>(arr: T[], value: T): number {
    return arr.indexOf(value);
  }
  
  const numberArray = [10, 20, 30, 40, 50];
  const stringArray = ["apple", "banana", "cherry", "date"];
console.log("Question 11");
  console.log(findIndex(numberArray, 30));
  console.log(findIndex(numberArray, 100)); 
  console.log(findIndex(stringArray, "cherry")); 
  console.log(findIndex(stringArray, "grape")); 
  
//   Create two interfaces: Car with a property drive() that returns &quot;Driving a car!&quot;,
//   and Bike with a property ride() that returns &quot;Riding a bike!&quot;. Then, create a
//   function useVehicle(vehicle: Car | Bike) that calls drive() if it&#39;s a Car and calls
//   ride() if it&#39;s a Bike, using a type guard to differentiate between the two. Create
//   instances of Car and Bike, and pass them to useVehicle().


interface CAR {
    drive(): string;
  }
  
  interface Bike {
    ride(): string;
  }
  
  function useVehicle(vehicle: CAR | Bike): void {
    if ("drive" in vehicle) {
      console.log(vehicle.drive());
    } else {
      console.log(vehicle.ride());
    }
  }
  
  const myCar: CAR = {
    drive: () => "Driving a car!"
  };
  
  const myBike: Bike = {
    ride: () => "Riding a bike!"
  };
  console.log("Question 12");
  useVehicle(myCar); 
  useVehicle(myBike);

//   Create two interfaces: Person with properties name (string) and age (number),
// and Employee with property jobTitle (string). Then, create a new type
// FullTimeEmployee that combines both interfaces using intersection (&amp;). Write a
// function describeEmployee(emp: FullTimeEmployee) that logs the name, age,
// and jobTitle. Create a FullTimeEmployee object and pass it to the function.

interface Person {
    name: string;
    age: number;
  }
  
  interface Employee {
    jobTitle: string;
    salary: number;
    getDetails(): string;
  }
  
  type FullTimeEmployee = Person & Employee;
  
  function describeEmployee(emp: FullTimeEmployee): void {
    console.log(`Name: ${emp.name}, Age: ${emp.age}, Job Title: ${emp.jobTitle}, Salary: ${emp.salary}`);
    console.log(emp.getDetails());
  }
  
  const fullTimeEmp: FullTimeEmployee = {
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



//   Create two interfaces: Dog with a method bark() returning &quot;Woof!&quot;, and Cat with
// a method meow() returning &quot;Meow!&quot;. Then, create a type Pet that can be either a
// Dog or a Cat. Write a function makeSound(pet: Pet) that calls bark() if it&#39;s a Dog
// and calls meow() if it&#39;s a Cat, using a type guard to determine the correct method.
// Create instances of Dog and Cat, and call makeSound() on both.

interface DOG {
  bark(): string;
}

interface CAT {
  meow(): string;
}

type Pet = DOG | CAT;

function makeSound(pet: Pet): void {
  if ("bark" in pet) {
    console.log(pet.bark());
  } else {
    console.log(pet.meow());
  }
}

const myDog: DOG = {
  bark: () => "Woof!"
};

const myCat: CAT = {
  meow: () => "Meow!"
};
console.log("Question 14");

makeSound(myDog);
makeSound(myCat); 

// Create an interface Shape with a method calculateArea(): number and a method
// getType(): string. Then, create a class Circle that implements Shape with a
// property radius (number), implements calculateArea() to return the area of the
// circle, and implements getType() to return &quot;Circle&quot;. Create an instance of Circle,
// set the radius, and call both methods.


interface SHAPE {
    calculate_area(): number;
    getType(): string;
  }
  
  class CIRCLE implements SHAPE {
    constructor(public radius: number) {}
  
    calculate_area(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    getType(): string {
      return "Circle";
    }
  }
  
  const myCircle = new CIRCLE(5);
  console.log("Question 15");
  console.log(`Type: ${myCircle.getType()}`);
  console.log(`Area: ${myCircle.calculate_area()}`);
  