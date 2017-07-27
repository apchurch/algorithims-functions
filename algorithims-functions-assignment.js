
var mode = function(arr){
	return arr.sort((a,b) =>
			arr.filter(v => v===a).length
			- arr.filter(v => v===b).length
		).pop()
}
console.log(mode([1, 2, 2, 3, 4, 4, 4, 4, 6]))

var leapYear = function(number) {
	for (var leap = 1904; leap < 2017; leap++) {
			if(number  % 4 === 0 && number > 1903) {
				return true	
			}
			else {
				return false
			}
			
		}
	}

console.log(leapYear)
console.log(leapYear(1904))

var nonArray = function(number) {
	for (var i = 0; i < arr.length; i++) {
		if ( numbers.indexOf(i) !== number) {
			return number
		}
	}
}
console.log(nonArray)
console.log(nonArray[1, 2, 4, 5])

// var duplicate = function(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		for (var j = 0; j < i; j++ )	{
// 		if (arr[j] === i) {
// 			return arr[i]
// 		}
// 		}
// 	}
// }
// console.log(duplicate)
// console.log(duplicate[1, 1, 2, 4, 6, 4])

// var pigLatin = function(text) {
// 	return text.split('')
// }
// var translate = function(text) {
// 	var chars = letters(text) 
// 	return chars.slice[1].join('') + chars [0] + 'ay'
// }		
// var newWord = function(word) {
// 	return word.replace(translate )
// }

	

// console.log(pigLatin)
// console.log(pigLatin('hello '))


// sameValue = function(arr){

// }

// 8. 
var arr = []
while(arr.length < 10){
	var randomNumber = Math.floor(Math.random()*101)
	if(arr.indexOf(randomNumber) > -1) continue;
	arr[arr.length] = randomNumber
}
	

console.log(arr)





