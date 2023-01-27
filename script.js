//your code here

let input=document.getElementById("evaluatedText");
let output=document.getElementById("wordCount");

input.addEventListener("keyup",evaluatedTextLength)

function evaluatedTextLength()
{
    console.log("sh")
    let text=input.value;
    console.log(text)
    // text.trim();
    let arr=text.split(" ");
    console.log(arr)

    output.innerHTML=arr.length-1;
}
