const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = []
//unsplash api
const count = 10
const apiKey = 'XGcFZzhE_p8LgjXs2ynlZWFHre3ERtbAB3eNC2QFcOY'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//check if all images were loaded
function imageLoaded(){
    console.log('image loaded')
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true
        loader.hidden = true
        console.log('ready =', ready )
    }
}

//helper function
function setAttributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key])
    }
}
//create elements for links and photos and add to dom
const displayPhotos = ()=>{
    totalImages = photosArray.length;
    console.log('total images', totalImages)
    //run function for each object in photosArray
photosArray.forEach((photo)=>{
    const a = document.createElement('a')
    const img = document.createElement('img')
    setAttributes(a, {
        href: photo.links.html,
        target: '_blank',
    })
    setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
    })
    // a.setAttribute('href', photo.links.html)
    // a.setAttribute('target', '_blank')
    // img.src = photo.urls.regular
    // img.alt = photo.alt_description
    // img.title = photo.alt_description

    //event listener, check when each is finished loading
    img.addEventListener('load', imageLoaded)
    a.appendChild(img)
    imageContainer.appendChild(a)
})
}



//get photos from Unsplash API
async function getPhotos (){
    try{
        console.log('I am called')
        const response = await fetch(apiUrl)        
        const data = await response.json()
        photosArray = data
        displayPhotos();
    }catch(err){
        console.log('ERROR!',err)
    }
}


window.addEventListener('scroll',()=>{
if(window.innerHeight + window.scrollY >= document.body.offsetHeight -1000 && ready){
ready = false;
getPhotos()
totalImages = 0;
imagesLoaded = 0;
}
})

//on load
getPhotos()