/****************************************************************************************************************
* Run it in the chrome console before the game starts, press space and it will type the word for you.
*****************************************************************************************************************/

var last = document.getElementsByClassName("inputPanel")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].getElementsByTagName("td")[0].getElementsByTagName("div")[0].getElementsByTagName("div")[0];
var text = "";

try {
	text = last.getElementsByTagName("span")[0].innerHTML + last.getElementsByTagName("span")[1].innerHTML + last.getElementsByTagName("span")[2].innerHTML
}
catch {
 	text = last.getElementsByTagName("span")[0].innerHTML + last.getElementsByTagName("span")[1].innerHTML
}

console.log(text)
words = text.split(" ");

var num = 0;
function print_next() {
    document.getElementsByTagName("input")[0].value = words[num];
    num++;

}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
       print_next();
    }
}
