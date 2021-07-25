## JSON

### -  XHR(Xml Http Request)



### -  JSON(JavaScript Object Notation)

* simplest data interchange format (데이터를 주고 받을때 쓸 수 있는 가장 간단한 포맷이다.)

* lightweight text-based structure ( text를 기반으로 가볍다)

* easy to read (가독성이 좋다)

* key-value pairs (key-value로 이루워졌있는 파일 포맷이다.)

* used for serialization and transmission of data between the 

  network the network connection (데이터 간의 직렬화 및 전송에 사용된다.)

* independent programming language and platform (platfrom이나 programming language이 상관없음 )

****

#### 1. Object to JSON

* **stringify(obj)**

* JavaScript에만 있는거랑 함수는 json에 포함되지 않는다.

  ```javascript
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
  ```

  

#### 2. JSON to Object

* parse(Json)

  ```javascript
  console.clear();
  json = JSON.stringify(rabbit);
  const obj = JSON.parse(json, (key, value) => {
  	console.log(`key : ${key}, value : ${value}`);
      // obj에 text에 형태로 들어가 있기 때문에 함수의 기능을 사용하지 못하기 때문에 콜백함수를 이용함
  	return key === 'birthData' ? new Date(value) : value; 
  })
  
  console.log(obj);
  console.log(rabbit.birthData.getDate());
  
  // 위에 return에서 birthData일 경우 new Date() 받았기 때문에 Data안에있는 getDate()를 사용가능
  console.log(obj.birthData.getDate());
  ```

****

### 유용한 사이트

* JSON Diff checker: [http://www.jsondiff.com/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbWszUll1aDc4NUJSeGhnaF9DZjlrRHYxdlpfZ3xBQ3Jtc0tuRExHUnd1aUhzbEgtbW4wLWxxeUpTOVpNX3VIU21JTGxDRndqT2d3eFF1bEh2Z1FRZkR3VG9DZ3kwTlhUTjRGQmdBVEdVai01NldvWm1kUzdVd0F0cDNadzU2c1poandQWmRHMWJOcG81X1dxX2FMVQ&q=http%3A%2F%2Fwww.jsondiff.com%2F) 

* JSON Beautifier/editor: [https://jsonbeautifier.org/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa1NiUGQ3RG90RndYU1plR1RpOVhiRjlINmVsQXxBQ3Jtc0ttUlZzLWZHY0JPZmpEZ2I5OUVBWktvckU2b0dNSTdWTVZoTFRuQmdlR283NmQ5UHJkdFh1VlQxeElUVVd5d0l4SmdmdWdGN2tua2VEWHJGRjhhaUxZRFV1cmNaQ1E1N3pwYU45TlYyeVZXWEJvM0NsMA&q=https%3A%2F%2Fjsonbeautifier.org%2F) 

* JSON Parser: [https://jsonparser.org/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGtkWVBFS29raGJ4dXdKMFZqMFl3VW1PMVRvUXxBQ3Jtc0trSnktOFc1Qk9Jb3ZDOGx3czJ5R1dNdDVaRlhIbnZzU01ESnZBZTNVY013MW1zMHNFd2NWM2VHTFF6X3Jpc0ExS1NJb0NUM1dSWDJOUlRqbldCR3FKOGtiOTYzLXRpUFFmV3NvUWM4bWE0OVBzTndxUQ&q=https%3A%2F%2Fjsonparser.org%2F) 

* JSON Validator: [https://tools.learningcontainer.com/j...](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbE9yQ3lBZVFKQXduQXBwM3IwZVRydU8ybk9md3xBQ3Jtc0tsTnpUMU1laHBVSS1MMGJkUzBJTlVLMjd2SU5UN21QYXdQbVNCa1NtQWlHRzNMLVpuTTh5NzA4OGFXcVFLVTgwNDRHNGNzaS1NNS1VV0JDWFdDTnBUZWRwZDE2WVlZNmFPNU95M21lWnpHOU1zOXVhdw&q=https%3A%2F%2Ftools.learningcontainer.com%2Fjson-validator%2F)

****

