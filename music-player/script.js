const image = document.querySelector('img')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector('audio')
const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')



// music
const songs = [
    {
        name: 'jacinto-1',
        displayName:'Eletric Chill Machine',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-2',
        displayName:'Seven Nation Army (remix)',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-3',
        displayName:'Goodnight, Disco Queen',
        artist: 'Jacinto Design',
    },
    {
        name: 'metric-1',
        displayName:'Front Row (Remix)',
        artist: 'Jacinto Design'
    }
]




//check if playing

let isPlaying = false;


// play

function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'pause')
    music.play();
}

// pause

function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'play')
    music.pause();
}


//play or pause event listener

playBtn.addEventListener('click', ()=> (isPlaying ? pauseSong() : playSong()));


//update

function loadSong(song){
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`
    image.src = `img/${song.name}.jpg`
}


//current song
let songIndex = 0;

function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length -1
    }
    console.log(songIndex)
    loadSong(songs[songIndex])
    playSong();
}
function nextSong(){
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0
    }
    console.log(songIndex)
    loadSong(songs[songIndex])
    playSong();
}
//on load - select first song

loadSong(songs[songIndex])
//


prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)