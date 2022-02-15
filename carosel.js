

function insertButtons(upperDiv) {
  for (let i = 0; i < qtBanners; i++) {
    let a = document.createElement("a")
    a.addEventListener("click", (event) => buttonClicked(event.target, i))
    a.innerText = i
    upperDiv.appendChild(a)
  }

  navigationButtons.children[0].classList.add("selectedItem")
}

function buttonClicked(btn, item) {
  clearInterval(intervalId)
  nextBanner(btn, item)
  intervalId = autoPlay()
}

function nextBanner(btn, item) {
  let buttons = navigationButtons.children
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selectedItem")
  }
  btn.classList.add("selectedItem")
  selectedItem = item
  bannersTop.scrollTo(bannersTop.offsetWidth * selectedItem, 0)
}

function autoPlay() {
  return setInterval(() => {
    if (selectedItem < qtBanners - 1) selectedItem++
    else selectedItem = 0
    nextBanner(navigationButtons.children[selectedItem], selectedItem)
  }, 3000)
}

const bannersTop = document.getElementById("items")
var selectedItem = 0
const qtBanners = bannersTop.children.length

const navigationButtons = document.createElement("div")
navigationButtons.id = "navigationButtons"
document.getElementById("items-wrapper").appendChild(navigationButtons)
insertButtons(navigationButtons)

var intervalId = autoPlay()