var generator_func = function* (){
	console.log("111")
	yield 1;
	console.log("222")
	yield 2;
 };
 
 var itr = generator_func();
 console.log(itr.next());
//  console.log(itr.next());
//  console.log(itr.next());