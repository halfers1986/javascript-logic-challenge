// Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills. Something that is useful not only in interviews when you get challenging problems, but also in your day to day work as a developer. First, start off by reading this article: https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2

// Question 1:
// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


const button1 = document.getElementById("sortbutton1");
const button2 = document.getElementById("sortbutton2");
const button3 = document.getElementById("sortbutton3");
const button4 = document.getElementById("sortbutton4");
let array1 = [76, 4, 3, "7", 23, 178, 7, "15", 4, 1, 9, 15]
let array2 = [53, 4, "2", 4, 10, 4, 7, 345, 3, 2, 2, 8, 7, 51, 1, 7]
let array3 = ["19", 12, 64, 3, 8, 4, 16, "7"]
let array4 = [4, 6, 1, 87, 145, 3, 5, 12, 3, 9, 87, 4, 6, 86, 3, 2, 1, 35 ,7, 90]
button1.addEventListener("click", sort1);
button2.addEventListener("click", sort2);
button3.addEventListener("click", sort3);
button4.addEventListener("click", sort4);


function sort1() {
	sort(array1)
}

function sort2() {
	sort(array2)
}

function sort3() {
	sort(array3)
}

function sort4() {
	sort(array4)
}

function sort(array) {
	const numbers = []
	const strings = []

	// Separates the number values and string values into separate arrays
	array.forEach((value) => {
	  if (typeof value !== "string") { 
	    numbers.push(value)
	  } else {
	    strings.push(value)
	  }
	})

	const groupedObject = numbers.reduce((obj,num) => {
		// If the number doesn't already exist as a key in the object, create it
		if (!obj.hasOwnProperty(num)) {
			obj[num] = [];
		}

		// Push the number to its integer key
		obj[num].push(num);

		// Pass the object on to the next loop
		return obj;
	}, {})

	// Turn the object back into an array
	const groupedArray = Object.values(groupedObject);

	// Deepens only the subarrays with more than one value, so the parent array can then be flattened (I don't know how to flatten only the arrays with a single value...)
	const deepArray = []


	groupedArray.forEach((array) => {
	  if (array.length > 1) {
	    deepArray.push([array])
	  }
	  else {
	    deepArray.push(array)
	  }
	})

	const groupedNumbers = deepArray.flat();

	const numWStrings = groupedNumbers.concat(strings) // adds the strings back into the array

	const sorted = numWStrings.sort((a,b)=> a - b); // sorts the combined array

	const outputHere = document.getElementById("output1")

	outputHere.innerHTML = JSON.stringify(sorted)

}

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const array = [1, 2, 4, 7, 16, 78, 13, 92, 12, 56, 65, 90, 114, 3, 8, 13, 41, 73]
let message = "";

const calcButton = document.getElementById("calcbutton")
calcButton.addEventListener("click", findSum);

function findSum() {
	const target = document.getElementById("numberinput").value
  	let i;
  	let j;
  	for (i=0; i < (array.length-1); i++) {
   		for (j=i+1; j<array.length; j++) {
     	 let a = array[i];
     	 let b = array[j];
    if ( a + b == target){
       message = `${a} + ${b} = ${target}`;
       break;
      } else { message = `Sorry, no two values in the array provided sum to the target`}
    }
    if (message !== `Sorry, no two values in the array provided sum to the target`) {break;}
  }
  const outputHere = document.getElementById("output2")
  outputHere.innerHTML = message
}




// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// let r = [255]
// let g = [0]
// let b = [0]

// let rgb = [r,g,b]

const convertButton = document.getElementById("convert")
convertButton.addEventListener("click", checkType)

let hex = ""
let rgbArray = []


function checkType() {
	const input = document.getElementById("rgbhex").value
	if (/^#?[0-9A-F]{6}$/i.test(input) === true) {
		hex = input;
		convertToRGB()
	} else if (/^r?g?b?\(?([01]?[0-9]{0,2}%?|2[0-5]{0,2}%?),\s*([01]?[0-9]{0,2}%?|2[0-5]{0,2}%?),\s*([01]?[0-9]{0,2}%?|2[0-5]{0,2}%?)\)?$/i.test(input) === true) {
		let fixThis = input.replace(/[rgba()""]/gi,'');
		rgbArray = fixThis.split(', ')
		convertToHex();
	} else {
		const outputHere = document.getElementById("output3")
		outputHere.innerHTML = `Sorry, I don't recognise this as a valid input`
	}
}

function convertToHex() {
	const hexArray = []
	rgbArray.forEach((i) => {
   	let position1 = parseInt(i/16);
  	 let position2 = i-(position1*16);
  	 if ( position1 == 10) {
     position1 = "A"
  	 } else if (position1 == 11) {
     position1 = "B"   
  	 } else if (position1 == 12) {
     position1 = "C"   
 	  } else if (position1 == 13) {
     position1 = "D"   
 	  } else if (position1 == 14) {
     position1 = "E"   
 	  } else if (position1 == 15) {
     position1 = "F"   
 	  };
   if ( position2 == 10) {
     position2 = "A"
 	  } else if (position2 == 11) {
     position2 = "B"   
   	} else if (position2 == 12) {
     position2 = "C"   
  	 } else if (position2 == 13) {
     position2 = "D"   
  	 } else if (position2 == 14) {
     position2 = "E"   
  	 } else if (position2 == 15) {
     position2 = "F"   
   };
  hexArray.push(`${position1}` + `${position2}`)
})
const finalHex = "#"+hexArray.join('')
const outputHere = document.getElementById("output3")
outputHere.innerHTML = `Your hex color code is ${finalHex}`
}


function convertToRGB() {
	let hexupper = hex.toUpperCase();
	console.log(hexupper)
let hexArray2 = hexupper.split("")
if (hexArray2.includes("#") === true) {
	hexArray2.shift();
};
const hexToNum = []
hexArray2.forEach((i) => {
  if (i == "A") {
    i = 10
  } else if (i == "B") {
    i = 11
  } else if (i == "C") {
    i = 12
  } else if (i == "D") {
    i = 13
  } else if (i == "E") {
    i = 14
  } else if (i == "F") {
    i = 15
  } else {
    i=parseInt(i, 10)
  };
  hexToNum.push(i);
})
const finalRGBArray = []
const position1 = (hexToNum[0]*16)+hexToNum[1]
const position2 = (hexToNum[2]*16)+hexToNum[3];
const position3 = (hexToNum[4]*16)+hexToNum[5];
finalRGBArray.push(position1, position2, position3)
const outputHere = document.getElementById("output3")
outputHere.innerHTML = `Your RGB color code is ${finalRGBArray[0]}, ${finalRGBArray[1]}, ${finalRGBArray[2]}`
}