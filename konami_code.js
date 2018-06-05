const codes = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
]

function init () {
  // your code here
  let index = 0
  document.body.addEventListener('keydown', (event) => {
    if (event.key === codes[index]) {
      index ++
      console.log(index)
    } else {
      index = 0
    }

    if (index === codes.length) {
      console.log('ALERT')
      alert('Hurray!')
    }
    // // }
    // else {
    // //   console.log("ENTER A RIGHT KEY!")
    // //   index = 0
    // // }
  })
}
