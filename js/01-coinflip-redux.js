let coinFlip
let count = parseInt(window.prompt("Enter a number of times you want to flip the coin: "))

console.log(count);

for(let i = 0; i<=count; i++)
{
    coinFlip = Math.round(Math.random())
    //console.log(coinFlip)
    if(coinFlip ===0){
        console.log("Heads")
    }else{
        console.log("Tails")
    }
}