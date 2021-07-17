// JavaScript Document
// Q1. make a string out of an array
{
	const fruits = ['apple', 'banana', 'orange'];
	const result = fruits.join(', ');
	console.log(result);
}

// Q2. make an array out of a string
{
	const fruits = '??, ??, ??, ??';
	const result = fruits.split(',', 3); 
	console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
	const array = [1, 2, 3, 4, 5];
	const result = array.reverse();
	console.log(result);
}

// Q4. make new array without the first two elements
{
	console.clear();
	const array = [1, 2, 3, 4, 5];
	const result = array.slice(2, 5);
	console.log(result);
}

console.clear();
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
	const result = students.find((student, index) => student.score === 90);
	console.log(result);
}

// Q6. make an array of enrolled students
{
	const result = students.filter((students) => students.enrolled);
	console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
	const result = students.map((students) => students.score); 
	console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
	// 값들중 조건을 충족하는 값이 하나라도 있으면 true가 나온다.
	const result = students.some((students) => students.score < 50); 
	console.log(result);	
	
	// 모든 값이 조건을 충족해야 true가 나온다
	const result2 = !students.every((students) => students.score >= 50); 
	console.log(result2);	
}

// Q9. compute students' average score
{
	console.clear();
	const result = students.reduce((a, b) =>{
		console.log(a);
		console.log(b);
		return a + b.score;
	}, 0);
	console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
	const result = students.map((students) => students.score)
	console.log(String(result));
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
	console.clear();
	const result = students.map((students) => students.score)
	.sort(function(a, b){
		return b - a;
	});
	console.log(result);
//	let j = 0;
//	let sum = [];
//	for (let number = 0; number < students.length; number++) {	
//		j++;
//		if (result[number] < result[j]) {
//			sum.push(result[number]);
//			sum.push(result[j]);
//		}
//		
//		else {
//			sum.push(result[j]);
//			sum.push(result[number]);
//		}
//		console.log(sum);
//	}
//	console.log(sum);
//	
}