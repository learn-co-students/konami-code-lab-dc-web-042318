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
  // your code here
  let kc = 0

  function onKeyDownHandler(e) {
    const key = e.key;

    if (key === codes[kc]) {
      kc++

      if (kc === codes.length) {
        alert("Hurray!");
        kc = 0
      }
    }
  }

  document.body.addEventListener("keydown", onKeyDownHandler)
}
