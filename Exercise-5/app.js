// setTime Function

function app(){
    console.log("First")
    setTimeout(function Set(){
        console.log("SetTimeout running")
    },2000)
    console.log("Last")
}


app() 