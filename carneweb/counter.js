export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('windo scroll', window.scrollY > 300)
})
