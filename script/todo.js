let input = document.getElementById("input");
let result = document.getElementById("result");
let list = [];
let date = new Date();
let hours;
let minutes;
let seconds;

if (date.getMinutes().toString().length < 2) {
  minutes = "0" + date.getMinutes().toString();
} else {
  minutes = date.getMinutes().toString();
}

if (date.getHours().toString().length < 2) {
  hours = "0" + date.getHours().toString();
} else {
  hours = date.getHours().toString();
}

if (date.getSeconds().toString().length < 2) {
  seconds = "0" + date.getSeconds().toString();
} else {
  seconds = date.getSeconds().toString();
}

document.getElementById("date").innerHTML = hours + ":" + minutes + ":" + seconds;

setInterval(function setTime() {
  date = new Date();
  
  if (date.getMinutes().toString().length < 2) {
    minutes = "0" + date.getMinutes().toString();
  } else {
    minutes = date.getMinutes().toString();
  }

  if (date.getHours().toString().length < 2) {
    hours = "0" + date.getHours().toString();
  } else {
    hours = date.getHours().toString();
  }

  if (date.getSeconds().toString().length < 2) {
    seconds = "0" + date.getSeconds().toString();
  } else {
    seconds = date.getSeconds().toString();
  }

  document.getElementById("date").innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);

// function to create a new object
function createObject(userInput) {
  list.push(userInput);
}

// creates paragraphs according to array.length
function createList(list) {
  result.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    result.innerHTML += list[i] + "<br>";
  }
}

function removeItem() {
  list.pop();
  result.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    result.innerHTML += list[i] + "<br>";
  }
}

function removeAll() {
  list = [];
  result.innerHTML = "";
}

// executes code, when a user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    createObject(input.value);
    input.value = "";
    createList(list);
  }
});

result.addEventListener("click", removeItem);
