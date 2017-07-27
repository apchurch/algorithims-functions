
var findMode = function(arr) {
	var mode = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < i; j++) {
			if (arr[j] === arr[i]) {
				mode = arr[j];
				return mode
				}
			}
		}
		
	}
console.log(findMode);
console.log(findMode([2, 4, 4, 4, 6, 6, 1]))

var leapYear = function(number) {
	for (var leap = 1904; leap < 2017; leap +=4) {
			if(number === leap) {
				return true	
			}
			else {
				return false
			}
			
		}
	}

console.log(leapYear)
console.log(leapYear(1908))

var nonArray = function(arr) {
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== nonArray) {
			return i
		}
	}
}
console.log(nonArray)
console.log(nonArray[1, 2, 4, 5])

var duplicate = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j = i; i++ )	{
		if (arr[j] === i) {
			return arr[i]
		}
		}
	}
}
console.log(duplicate)
console.log(duplicate[1, 1, 2, 4, 6, 4])

var pigLatin = function(text) {
	
}
