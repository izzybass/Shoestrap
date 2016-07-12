var restaurants = ["Sabra", "Turkish", "Morroccan", "Japanese", "Thai"];
for(number = 0; number<restaurants.length; number+=1) {
	console.log(restaurants[number]);
}

var intArray = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62]; 
var total = 0;
var answer = 0;
for(number = 0; number<intArray.length; number++) {
	total = total + intArray[number];
	answer = total / intArray.length;
}
alert("The answer is: " + answer);

var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(' + '));

var num = "025468";
var string = '';

for(var i = 0; i<num.length; i++){
	if(num[i] % 2 ===0 && num[i+1] % 2 === 0){(string +=num[i] + "-");
} else {
	string += num[i];
}
}
console.log(string);

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
