console.log("script-works")
const text = document.querySelector(".text")
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")
const element = document.querySelectorAll("span")
for (let i = 0; i < element.length; i++) {
  element[i].style.transform = "rotate(" + i * 18 + "deg)"
}

var el = text

function fadeIn(el, time) {
  el.style.opacity = 0

  var last = +new Date()
  var tick = function () {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time
    last = +new Date()

    if (+el.style.opacity < 1) {
      ;(window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16)
    }
  }

  tick()
}

fadeIn(el, 3000)
