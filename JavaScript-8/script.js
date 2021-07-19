// JavaScript Document
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

console.clear();
const rabbit = {
	name : 'tori',
	color : 'white',
	size : null,
	birthData : new Date(),
	
	// 함수는 object에 있는 data가 아니기 때문에 json에 포함되지 않는다.
	jump: () => {
		console.log(`${name} can jump!`);
	}
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);


console.clear();
json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key : ${key}, value : ${value}`);
	return key === 'name' ? 'ellie' : value;
});
console.log(json);


// json to object
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
	console.log(`key : ${key}, value : ${value}`);
	return key === 'birthData' ? new Date(value) : value; 
})

console.log(obj);
console.log(rabbit.birthData.getDate());
console.log(obj.birthData.getDate());






