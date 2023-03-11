let strInput = '1,190,100,2'; 
let input = strInput.split(',');
console.log(input);

isSorted(input);

function isSorted (arr) {
	let isSortedInc = true; // boolean
    let isSortedDec = true;

    // check for increasing 
	for (let i = 1; i < arr.length && isSortedInc; i++){
		isSortedInc = (arr[i - 1] <= arr[i]);
        console.log(isSortedInc,1);
    }
        if (isSortedInc) return console.log('YES') 

    // check for decreasing
    else for (let i = 1; i < arr.length && isSortedDec; i++){
		isSortedDec = (arr[i - 1] >= arr[i]);
        console.log(isSortedDec,2);
    }


    if (isSortedDec) return console.log('YES')
    else return console.log('NO');
}
