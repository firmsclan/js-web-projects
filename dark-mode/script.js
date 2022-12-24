const toggleSwtich = document.querySelector('input[type=checkbox]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255/ 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255/ 50%)': 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    imageMode(isDark ? 'dark' : 'light')
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    :toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}


// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255/ 50%)'; 
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     imageMode('dark')
// }
// function lightMode() {
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     nav.style.backgroundColor = 'rgb(255 255 255/ 50%)'; 
//     toggleIcon.children[0].textContent = 'Light Mode';
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//     imageMode('light')
// }
//switchTheme

function switchTheme(event){
    const theme = event.target.checked;
   if(theme){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark')
    toggleDarkLightMode(true)

   }else{
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light')
    toggleDarkLightMode((false))
   }
}

//event listener
toggleSwtich.addEventListener('change', switchTheme);

//check local stoarge for theme

const currentTheme = localStorage.getItem('theme')

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme)
    
    if(currentTheme === 'dark'){
        toggleSwtich.checked = true;
        toggleDarkLightMode(false)
    }
}