let userinput = 0

document.getElementById('button').addEventListener('click', compare)

function compare() {
  userinput = document.getElementById('input').value
  userinput =  parseInt(userInput)

  if (userinput < 0) {
    userinput = document.getElementById('answer').innerHTML =
    'No, negetive'
  } else {
    userinput = document.getElementById('answer').innerHTML =
    'Yes, positive'
  }
}