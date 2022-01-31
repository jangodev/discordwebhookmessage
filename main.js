/* request.setRequestHeader('Content-type', 'application/json');
      const params = {
        username: "[put the name of your webhook here]",
        avatar_url: "[paste image address here for your webhook avatar]",
        content: "[put your message here]"
      }
      request.send(JSON.stringify(params)); */

function lesgo() {


let input = document.getElementById("cool");
let div = document.getElementById("lmao");
input.addEventListener("click", lmao)
let request = new XMLHttpRequest();
request.open("POST", "YOUR WEBHOOK LINK HERE");

request.setRequestHeader('Content-type', 'application/json');

let params = {
username: "",
avatar_url: "",
content: input.value
 }


// ping spam prevention
if (input.value == "@everyone") {
  console.log('yeah works')
  params.content = "[MESSAGE REMOVED]"
}

else {
  input.value === ""
}

request.send(JSON.stringify(params));


}



