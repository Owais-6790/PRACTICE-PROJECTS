console.log ("hello world")


function Table(b){
for (let a = 1; a <= 10; a++) {
    console.log(`${b} X ${a} = ${b*a}`)
}
}

// TABLE GENERATOR

function countVowels (str){
    let count = 0
    for (let a = 0; a < str.length; a++) {
        if (str[a] === "a" || str[a] === "e" || str[a] === "i" || str[a] === "o" || str[a] === "u") {
            count++;
        }
        
    }

    console.log (count)

}

// VOWEL COUNT


function countEvenNumbers (b){
    let count = 0
    for (let a = 0; a < b; a++) {
        if ( a % 2 == 0) {
            count++;
        }
        
    }

    console.log (count)

}

// EVEN NUMBER COUNTER

function squarefind (a){
    num = a*a
    return(num)
}

let arr = [1,2,3,4,5,6]

arr.forEach((val) => {
    console.log(squarefind(val));
})


