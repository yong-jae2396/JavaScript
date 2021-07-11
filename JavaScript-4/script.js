// JavaScript Document

class person {

  // constructor

  constructor(name, age) {

    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name} : hello!`);
  }
}

const ellie = new person('ellie', '20');
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2.Getter and setters

class User{

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }


  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);



// 3. Fields (public, private)

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);




// 4. Static properties and methods

class Article {
    static publisher = 'Drem Coding';
	constructor(articleNumber) {
        this.articeNumber = articeNumber;
    }

	static printPublisher() {
        console.log(Article.publisher)
    }
}
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    
    getArea() {
        return this.width * this.height;
    }
}

class Rectiangle extends Shape {}
class Triangle extends Shape {
	getArea() {
		return (this.width * this.height) / 2;
	}
}

const rectangle = new Rectiangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
