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

### - Object

 * instance of a class
 * created many times
 * data in

****



