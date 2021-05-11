document.getElementById('button').addEventListener('click',compare)
let userinput = 0

function compare() {
  userInput = document.getElementById('input').value
  userInput =  parseInt(userInput)

  if (userInput < 0) {
  userInput = document.getElementById('answer').innerHTML = "No, negetive"
  } else {
  userInput = document.getElementById('answer').innerHTML = "Yes, positive"
  }
}