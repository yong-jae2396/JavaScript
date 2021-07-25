// JavaScript Document

// callback to Promise
class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// id, password 검사
				if (	
					(id === 'ellie' && password === 'dream') ||
					(id === 'coder' && password === 'academy')
				) {
					resolve(id);
				} 
				// id 와 password가 적합하지 않을경우 실행
				else {
					reject(new Error('not found'));
				}
			}, 2000);	
		}) ;		
	}
	
	// id를 검사하여 사용자의 역할을 출력
	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() =>{
				if (user === 'ellie') {
					resolve({name: 'ellie', role: 'admin'});
				}
				else{
					reject(new Error('no access'));
				}
			}, 1000);
		});
	}
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

//Promise 버전
userStorage
	.loginUser(id, password)
	.then(userStorage.getRoles)
	.then(user => alert(`Hello ${user.name}, you have a ${user.role}, role`))
	.catch(console.log);



// callback hell
//userStorage.loginUser(
//	id, 
//	password, 
//	user => {
//		userStorage.getRoles(
//			user, 
//			(userWithRole) => {
//				alert(
//                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//                );
//		},
//			error => {
//				console.log(error);
//			}
//		);
//	}, 
//	error => {console.log(error)}
//);