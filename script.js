
function output(value) {
    //takes only an integer value
    var intValue = parseInt(value)
    var data = [];
    for (let i = 1; i <= intValue; i++) {
//looping through the range of argument inclusive
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            data.push("yu-gi-oh");

        } else if (i % 3 == 0 && i % 5 == 0) {
            data.push("gi-oh");

        } else if (i % 2 == 0 && i % 3 == 0) {
            data.push("yu-gi");

        } else if (i % 2 == 0 && i % 5 == 0) {
            data.push("yu-oh");

        } else if (i % 5 == 0) {
            data.push("oh");

        } else if (i % 3 == 0) {
            data.push("gi");

        } else if (i % 2 == 0) {
            data.push("yu");

        } else {
            data.push(i);
        }
    }
    return data;
}
 



// we call the function passing 100 as arguement and a random number of choice

console.log(output(100));
console.log(output(45));

