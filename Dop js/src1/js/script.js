function task1(){
    let num = +prompt('Введите число.')

    if(num / 1 == num && num / num == 1){
        console.log('Это натуральное число.');
    }
}
task1()
task2()
task3()

function task2(){
	let num = +prompt('Введите это же число.')

	if(num % 1 == 0 && num % 2 != 0){
		console.log('Это нечетное число');
	}else{
		(num % 2 == 0 && num % 1 != 0 && num / 3);
		console.log('Это четное число');
	}
}

function task3(){
	let num = +prompt('Введите это же число в последний раз.')

	if(num % 3 == 0){
		console.log('Это число делится на три')
	}else{
		(num % 3 !== 0);
		console.log('Это число не делится на три');
	}
}