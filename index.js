const btnElem = Array.from(document.querySelectorAll('.btn'))
function handleClick(event) {
  console.log(event.target.textContent)
}
btnElem[0].addEventListener('click', handleClick)
btnElem[1].addEventListener('click', handleClick);