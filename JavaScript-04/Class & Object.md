

## Class & Object 



### - Class 

 * template 
 * declare once 
 * no data in 
 * introduced in ES6 
 * syntactical sugar over **prototype-based** inheritance 

****

#### 1. Class declarations	

```javascript
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

const ellie = new person('ellie', 20)
```



****

### 2. Getter and setters

```javascript
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
	}
    
    get age() {
        return this._age;
    }
    
    set age(value) {
        // if (value < 0) {
    	// 	 throw Error('age can not be negative');
	    // }
        
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', ' job', -1)l
console.log(user1.age);
```



### 3. Fields (public, private)

* **Too sooon!**
* https://developer.mozilla.org/en-Us/docs/Web/javaScript/Reference

```javascript
classs Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
```

****

### 4. Static properties and methods

* **Toosoon!**

```javascript
class Article {
    static publisher = 'Drem Coding';
	constructor(articleNumber) {
        this.articeNumber = articeNumber;
    }

	static printPublisher {
        console.log(Article.publisher)
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
```

****

### 5. Inheritance

* a  way for one class to extend another class. ()
* 필요한 function만 재정리해서 사용 할 수 있다 (over rading)

```javascript
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
```



****

### 6. class checking : instanceof

* object가 이class를 이용해서 만든 object인지 아닌지 판별하여 bloolean의 형태로 출력
* 사용법 : **A  instanceof  B**

```javascript
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
```









****

### - Object

 * instance of a class
 * created many times
 * data in
 * 우리 JavaScript에서 만든 모든  object와 class는  JavaScript의 opject를 상속한 것

****