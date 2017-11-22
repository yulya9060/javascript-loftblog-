/*
Создать переменную со строковым значением. 
Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.

*/
var str = 'Hello world efki';
var volwes='euioa';
var newstr = '';

for(var i = 0; i<str.length;i++){
	for(var j =0; j<volwes.length;j++)
	{
		if (str[i] == volwes[j]){
			newstr+=str[i];
		}
	}
}
console.log(newstr);

/*Сформировать произвольный массив объектов, описывающий, например, работников компании, в каждом объекте должны содержаться 
сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000).
Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, 
чья зарплата превышает 1000.
*/
var job=[{name:"Alex", salary:500},{name:"Ivan", salary:2000},{name:"John", salary:1500}];
function users(array)
{
	var arr=[];
	for (var i=0; i<array.length;i++)
	{	
		if(array[i].salary>1000){
			arr.push(array[i].name);
		}
		
	}
	return arr;
}

var k=users(job);
console.log(k);


/*
Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла.
Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.

*/
var pathfile='/users/download/index.htm';

function substrtrue(path){
	subs='html';
	if (path.indexOf(subs)<0){
		return false;
	}
	return true;
}


console.log(substrtrue(pathfile));


var k=5;

function even(number){
	if (number%2==0){
		return true;
	}
	else {
		return false;
	}
}
var evenarr=[];
var evenodd=[1,3,5,4,2,7,8];
for (var i =0; i<evenodd.length; i++){
	if (even(evenodd[i])){
		evenarr.push(evenodd[i]);
	}
	
} 
console.log(evenarr);
