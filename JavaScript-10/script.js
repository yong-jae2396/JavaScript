// JavaScript Document............

// Producer
const promise = new Promise((resolve, reject) => {
	//doing some heavy work (network, read files)
	console.log('doing something...');
	setTimeout(() => {
		//resolve('ellie');
		reject(new Error('no network'));
	}, 2000);
});



// Consumrs 
promise //
	.then((value) => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
	})
	// 성공이나 실패와 상관없이 어떤기능을 마지막으로 실행하고 싶을때 사용
	.finally(() => {
		console.log('finally');
	});


console.clear()
// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
	.then(num => num * 2)
	.then(num => num * 3)
	.then(num => {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num-1), 1000);
		});
	})
	.then(num => console.log(num));


// error Handling
const getHen = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => resolve('닭'), 1000);
	});

const getEgg = hen =>
	new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
	});

const cook = egg =>
	 new Promise((resolve, reject) => {
		setTimeout(() => resolve(`${egg} => 계란후라이`), 1000);
	});

getHen() //
	.then(getEgg)
	.catch(error => {
		return '빵';
	})
	.then(cook)
	.then(console.log);
	