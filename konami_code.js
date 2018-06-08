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
  i = 0
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    if (key === codes[i]) {
      i++;
    } else {
      i = 0;
    }
    if (i === codes.length) {
      window.alert('Nailed It!');
    }
  })
};
