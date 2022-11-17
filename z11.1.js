let arr = [1, 2, 3, 4, 5, 6, 7, 7, 6, 0, 4, 4];

let filtered = arr.filter(elem => elem % 
	2 == 0); 
let Oddfiltered = arr.filter(elem => elem % 
        2 % 2); 
let Nullfiltered = arr.includes(0)

function Numbers() {
    console.log(filtered.length);
    console.log(Oddfiltered.length);
    console.log("0 is - " + Nullfiltered);
}

Numbers()
