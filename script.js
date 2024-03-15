function fibonacci(num) {

// your code here
	let a = 0;
	let b = 1;
	if(num == 1 || num == 0){
		return 0;
	}else if(num == 2){
		return 1;
	}else{
		for(let i=3;i<=num;i++){
			let c = a + b;
			a = b;
			b = c;
		}
		return b;
	} 
}			


module.exports = fibonacci;
