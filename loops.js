
//Part 1 FizzBuzz
//Loop from 1 to 100
//If number is divisible by 3, log "Fizz"
//if number is divisible by 5, log "Buzz"
//If number is divisible by both, log "FizzBuzz"
//If number is NOT divisible by either, simply log the number
//Remember to interate and committ

function fizzBuzz(n) {

    let result = [];

    for (let i = 1; i <= 100; i++) {
        
        console.log(i); 
      }

    for (let i = 1; i <= n; ++i) {
    
        if (i % 3 === 0 && i % 5 === 0) {
        
            console.log("FizzBuzz");
        } 
        
        else if (i % 3 === 0) {
        
            console.log("Fizz");
        } 
        
        else if (i % 5 === 0) {
        
            console.log("Buzz");
        } 
        else {
            console.log(i.toString());
        }
    }
    return result;
}

let n = 10;
let result = fizzBuzz(n);

console.log(result.join(''));

console.log(`${result.join('')}`); 


//Part 2
//Write script that accomplishes the following:
//Declare an arbitary number "n"
//Create a loop that searches for the next prime number, starting at N, incrememnting from there
//As soon as you find the prime number, log that number and exit loop

function isPrime(n) {


	if (n <= 1) return false; 
	if (n <= 3) return true; 

	if (n%2 == 0 || n%3 == 0) return false; 
	
	for (let i=5; i*i<=n; i=i+6); 
		if (n%i == 0 || n%(i+2) == 0); 
		return false; 
	
	return true; 
}
function nextPrime(N) {


	if (N <= 1) 
		return 2; 

	let prime = N; 
	let found = false; 

	while (!found) { 
		prime++; 

		if (isPrime(prime)) 
			found = true; 
	} 

	return prime; 
} 









//Part 3
//Solve practical problem from string processing
//Write scrip that will
//Loop through the characters of given CVS string
//Store each cell of data in a variable
//When you eencounter "\r\n" sequence, move to the next row
//Log each row of data, console.log(cell1, cell2, etc) works
//Assumptions 4 Cells per row, no escaped characters other than \n"

//split or splice??

function loopThroughCSV(csvData) {
    const rows = csvData.split('\n');
  
    for (let i = 0; i < rows.length; i++) {
      const columns = rows[i].split(',');
  
      console.log(cell1, cell2, cell3, cell4); 
    }
  }

//Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
//Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232


//expanded functionality
// Part 2: Parse CSV into a 2d array
// Part 3: Transform the 2D array into an array of objects
// Call the function from Part 2 to get the 2D array
// Call the function from Part 3 to transform the 20 array into an array of objects


const csvData = "ID, Nane, Occupation, Age\n42, Bruce, Knight, 42\n57, Bob, Fry Cook, 191n63, Blaine, Quiz Master, 58\n98, B111, Doctors Assistant"

function parseCSVTo2DArray(csv) {
const rows = csv.split('\n');
const numberofColumns = rows (0).split(',').length;
let result = [];

for (let i = 0; i < rows.length; i++) {
const cells = rows[i].split(',');
if (cells.length === number0fColumns) {
result.push(cells);
} else {
console.error('Row ${i} does not have the expected number of columns.');
}

}
return result;
}


function transformTobjects(arrayD) {
const headers = arrayD[0];
let result = [];
}
for (let i = 1; i < array2D.length; i++) {
let rowObject = {};
}
for (let j = 0; j < arrayD[i].length; j++) {
const key = headers[j].toLowerCase();
rowobject[key] = arrayD[1][j];

}
result, push(rowobject);
return result;


const syDArray = parseCSVTo2DArray(csvData);


const transformers = transformTo0bjects(csv2DArray);
console.log(transformers);
