function fibonacci(num) {
// your code here
	int a = 0;
	int b = 1;
	if(num == 1){
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
