// Pattern Program: Print numbers from 1 to 15 in triangle format

let number = 1;

for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row = row + number + " ";
        number++;
    }

    console.log(row);
}