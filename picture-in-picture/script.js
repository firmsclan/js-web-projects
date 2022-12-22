const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//prompt to select media stream, pass to video element, then play async func, try catch
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    }catch(err){
        console.log('Error',err)
    }
}


button.addEventListener('click', async ()=>{
    //disable button
    button.disable = true
//start picture in picture
try{
   await videoElement.requestPictureInPicture();
//reset buttton
    button.disable = false
}catch(err){
    console.log('error!', err)
}
})

//on load func
selectMediaStream()