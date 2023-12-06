let input = document.getElementById('input-box');
// this queryselectorall method  select all buttons from document 
let buttons = document.querySelectorAll('button');

let string = "" ;


// this module is under observation

/*let keysPressed = [];
document.addEventListener('keypress', function(event) {
  if (event.key === "Enter") {
    keysPressed.push(event.key);
    console.log(event.key);
  }
}); */

// this Array.from method convert a string content into a array formate of content.
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '=') {
            // this eval method evaluate your string
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string ;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})


