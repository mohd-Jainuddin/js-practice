let num=parseInt(process.argv[2])
let count=0

while(num){
    count++
    num=Math.floor(num/10)
}

console.log(count)