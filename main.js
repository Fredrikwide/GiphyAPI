
let apiKey = "ehdaANlah7WEHjCAweuwDcRB17JnCWyb"
// griphy fetch trending
let trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`

let randomURL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`



let body = document.querySelector("body")
let loaderView = document.querySelector(".loading")
let grid = document.querySelector(".image-grid")
let reload = document.querySelector("#refresh")
let currentImageBox = document.createElement("div")
let prevImageBox = document.createElement("div")
let closeButtonBox = document.createElement("div")
let nextImageBox = document.createElement("div")
let bottomBox = document.createElement("div")
let closeButton = document.createElement("div")
let wrapperBox = document.createElement("div")
let closeButtonIcon = document.createElement("img")

let observerOptions = {
  threshold: 0,
  rootMargin: "0px 0px 100px 0px"
}

let i= 0;
const randomizer = async (num) => {
  let randomImages = []


  while(num--){
    const randomRes = await fetch(randomURL)
    const random = await randomRes.json()
    const data = await random.data
    randomImages.push(data.images.downsized.url)
    i++;
  }
  renderImages(randomImages, i)
  return randomImages
}


//create card add class and eventlistener and return it
const createCard = () => {
  let card = document.createElement("div");
  card.classList.add("card");
  card.addEventListener('click', getElements)
  return card;
}


//create image add src and observe it and return it
const createImage = (src, id, obs = true) =>{
  let image = document.createElement("img");
  if(obs){
    image.src = src;
    image.id = id
    observer.observe(image)
    return image;
  }
  else {
    image.src = src
    image.id = id
    return image;
  }
}


const setNumTostring = num => num.toString()



let incNum = 0;
let decNum = 0;





const createImagePage = (strPrev, strcurrent, strNext ) => {
  
  let imageArr = document.querySelectorAll(".card")
  imageArr.forEach(img => img.classList.add("hidden"))

  let overlay = document.querySelector(".overlay")
  let prevImage = document.getElementById(strPrev)
  let currentImage = document.getElementById(strcurrent)
  let nextImage = document.getElementById(strNext)

  let newPrev = createImage(prevImage.src, prevImage.id, obs = false)
  let newCurr = createImage(currentImage.src, currentImage.id, obs = false)
  let newNext = createImage(nextImage.src, nextImage.id, obs = false)

  closeButtonIcon.src="./assets/close.svg"
  closeButton.classList.add("close")
  currentImageBox.classList.add("imageModal")
  bottomBox.classList.add("modalBottom")
  overlay.classList.add("active")
  wrapperBox.classList.add("flexWrap")
  prevImageBox.classList.add("grid-box")
  closeButtonBox.classList.add("grid-box")
  nextImageBox.classList.add("grid-box")

  overlay.appendChild(currentImageBox)
  overlay.appendChild(wrapperBox)
  wrapperBox.appendChild(bottomBox)
 
  bottomBox.appendChild(prevImageBox)
  bottomBox.appendChild(closeButtonBox)
  bottomBox.appendChild(nextImageBox)

  prevImageBox.appendChild(newPrev)
  currentImageBox.appendChild(newCurr)
  nextImageBox.appendChild(newNext)

  closeButtonBox.appendChild(closeButton)
  closeButton.appendChild(closeButtonIcon)

  prevImageBox.addEventListener('click', handleClickPrevious)
  nextImageBox.addEventListener('click', handleNext)

  closeButtonIcon.addEventListener('click',()  => closeModal(overlay))

}


let closeModal = (overlay) => {

  prevImageBox.innerHTML = ""
  currentImageBox.innerHTML = ""
  nextImageBox.innerHTML = ""
  
  closeButtonBox.innerHTML = ""
  closeButton.innerHTML =""

  bottomBox.ínnerHtml = ""

  overlay.innerHTML = ""

  wrapperBox.innerHTML = ""

  closeButtonIcon.removeEventListener('click', closeModal)
  let imageArr = document.querySelectorAll(".card")
  imageArr.forEach(img => img.classList.remove("hidden"))
}


const getElements = (e) => {

  let previous = Number(e.target.id) -1;
  let current = Number(e.target.id)
  let next = Number(e.target.id) +1 
  if(previous <= 0){
    return
  }
  let prev = setNumTostring(previous)
  let curr = setNumTostring(current)
  let nxt = setNumTostring(next)
  if(prev){
    createImagePage(prev, curr, nxt)
  }
}

const refreshImages = async () => {
  window.location.reload() 
}


const renderImages = async (gifs, num) => {

  grid.classList.add("hidden")
  loaderView.classList.remove("hidden")

  gifs.forEach((gif, index) => {
  index = num++
  console.log(num)
  let gridItem = createCard()
  let gridItemGif = createImage(gif, num)

  grid.appendChild(gridItem)
  gridItem.appendChild(gridItemGif)

  })

  loaderView.classList.add("hidden")
  grid.classList.remove("hidden")
}


let observer = new IntersectionObserver( (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    }
    else {
      randomizer(1)
      observer.unobserve(entry.target) 
    }
  })
}, observerOptions )


reload.addEventListener('click', refreshImages)
body.addEventListener('load', randomizer(8))
