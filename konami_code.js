const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener('keydown', function(event) {
    checkCode(event.key);
  })
}

let index = 0;

function checkCode(key) {
  if (key != codes[index]) {
    index = 0;
    console.log(key, index);
  } else {
    index += 1;
    if (index === 10) {
      console.log("YOU DID IT", key, index);
      alert("Hurray!");
    } else {
      console.log(key, index);
    }
  }
}

