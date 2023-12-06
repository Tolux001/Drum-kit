const custom = document.querySelector('.custom');

//Button to reduce the width of the keys
window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        custom.classList.add('heading--mobile');
    }else{
        custom.classList.remove('heading--mobile');
    }
})
custom.addEventListener('click', () => {
    const elements = document.querySelectorAll('.test');
    elements.forEach((element) => {
        const currentWidth = parseFloat(window.getComputedStyle(element).width);
        const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize)
        const currentWidthRem = currentWidth / remToPx;

        const newWidthRem = currentWidthRem - 4;

        const newWidthPx = newWidthRem * remToPx;

        element.style.width = `${newWidthPx}px`;
    })
})


// ------ Sound and border visibility -----

// ------- Large Devices ----------------------

//========> removing transition<=================
const removeTransition = (input) => {
    if (input.propertyName !== 'transform') return;
    input.target.classList.remove('playing');
}
const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach((key) =>{
    key.addEventListener('transitionend', removeTransition);
})

//Every key stroke has it own keycode, you can use this window eventListener to check it out in the console as you click on each key
const playMusic = (val) => {
    const audio = document.querySelector(`audio[data-key="${val.keyCode}"]`);
    const keys = document.querySelector(`div[data-key="${val.keyCode}"]`);
    if(!audio){ return}
    console.log(val.keyCode);
    keys.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
}
window.addEventListener('keydown', playMusic)

// ---------- Small Devices -----------------
const key_65 = document.querySelector(`audio[data-key="65"]`);
const key_83 = document.querySelector(`audio[data-key="83"]`);
const key_68 = document.querySelector(`audio[data-key="68"]`);
const key_70 = document.querySelector(`audio[data-key="70"]`);
const key_71 = document.querySelector(`audio[data-key="71"]`);
const key_72 = document.querySelector(`audio[data-key="72"]`);
const key_74 = document.querySelector(`audio[data-key="74"]`);
const key_75 = document.querySelector(`audio[data-key="75"]`);
const key_76 = document.querySelector(`audio[data-key="76"]`);
const key_81 = document.querySelector(`audio[data-key="81"]`);
const key_87 = document.querySelector(`audio[data-key="87"]`);
const key_69 = document.querySelector(`audio[data-key="69"]`);
const key_82 = document.querySelector(`audio[data-key="82"]`);
const key_84 = document.querySelector(`audio[data-key="84"]`);
const key_89 = document.querySelector(`audio[data-key="89"]`);
const key_85 = document.querySelector(`audio[data-key="85"]`);
const key_73 = document.querySelector(`audio[data-key="73"]`);
const key_79 = document.querySelector(`audio[data-key="79"]`);
const key_80 = document.querySelector(`audio[data-key="80"]`);
const kbd = document.querySelector('kbd');
const key = Array.from(document.querySelectorAll('.key'));

key.forEach((val) => {
    val.addEventListener('click', (e) => {
        val.classList.add('playing');
        const clickClass = e.currentTarget.classList;
        if(clickClass.contains('one')){
            key_65.currentTime = 0;
            key_65.play();
        }else if(clickClass.contains('two')){
            key_83.currentTime = 0;
            key_83.play();
        }else if(clickClass.contains('three')){
            key_68.currentTime = 0;
            key_68.play();
        }else if(clickClass.contains('four')){
            key_70.currentTime = 0;
            key_70.play();
        }else if(clickClass.contains('five')){
            key_71.currentTime = 0;
            key_71.play();
        }else if(clickClass.contains('six')){
            key_72.currentTime = 0;
            key_72.play();
        }else if(clickClass.contains('seven')){
            key_74.currentTime = 0;
            key_74.play();
        }else if(clickClass.contains('eight')){
            key_75.currentTime = 0;
            key_75.play();
        }else if(clickClass.contains('nine')){
            key_76.currentTime = 0;
            key_76.play();
        }else if(clickClass.contains('ten')){
            key_81.currentTime = 0;
            key_81.play();
        }else if(clickClass.contains('eleven')){
            key_87.currentTime = 0;
            key_87.play();
        }else if(clickClass.contains('twelve')){
            key_69.currentTime = 0;
            key_69.play();
        }else if(clickClass.contains('thirteen')){
            key_82.currentTime = 0;
            key_82.play();
        }else if(clickClass.contains('fourteen')){
            key_84.currentTime = 0;
            key_84.play();
        }else if(clickClass.contains('fifteen')){
            key_89.currentTime = 0;
            key_89.play();
        }else if(clickClass.contains('sixteen')){
            key_85.currentTime = 0;
            key_85.play();
        }else if(clickClass.contains('seventeen')){
            key_73.currentTime = 0;
            key_73.play();
        }else if(clickClass.contains('eighteen')){
            key_79.currentTime = 0;
            key_79.play();
        }else if(clickClass.contains('nineteen')){
            key_80.currentTime = 0;
            key_80.play();
        }
    })
})

// document.querySelector(`div[data-key="65"]`).addEventListener('click',()=>{
//     key_65.currentTime = 0
//     key_65.play();
// })
// document.querySelector(`div[data-key="83"]`).addEventListener('click',()=>{
//     key_83.currentTime = 0
//     key_83.play();
// })
// document.querySelector(`div[data-key="68"]`).addEventListener('click',()=>{
//     key_68.currentTime = 0
//     key_68.play();
// })
// document.querySelector(`div[data-key="70"]`).addEventListener('click',()=>{
//     key_70.currentTime = 0
//     key_70.play();
// })
// document.querySelector(`div[data-key="71"]`).addEventListener('click',()=>{
//     key_71.currentTime = 0
//     key_71.play();
// })
// document.querySelector(`div[data-key="72"]`).addEventListener('click',()=>{
//     key_72.currentTime = 0
//     key_72.play();
// })
// document.querySelector(`div[data-key="74"]`).addEventListener('click',()=>{
//     key_74.currentTime = 0
//     key_74.play();
// })
// document.querySelector(`div[data-key="75"]`).addEventListener('click',()=>{
//     key_75.currentTime = 0
//     key_75.play();
// })
// document.querySelector(`div[data-key="76"]`).addEventListener('click',()=>{
//     key_76.currentTime = 0
//     key_76.play();
// })
// document.querySelector(`div[data-key="81"]`).addEventListener('click',()=>{
//     key_81.currentTime = 0
//     key_81.play();
// })
// document.querySelector(`div[data-key="87"]`).addEventListener('click',()=>{
//     key_87.currentTime = 0
//     key_87.play();
// })
// document.querySelector(`div[data-key="69"]`).addEventListener('click',()=>{
//     key_69.currentTime = 0
//     key_69.play();
// })
// document.querySelector(`div[data-key="82"]`).addEventListener('click',()=>{
//     key_82.currentTime = 0
//     key_82.play();
// })
// document.querySelector(`div[data-key="84"]`).addEventListener('click',()=>{
//     key_84.currentTime = 0
//     key_84.play();
// })
// document.querySelector(`div[data-key="89"]`).addEventListener('click',()=>{
//     key_89.currentTime = 0
//     key_89.play();
// })
// document.querySelector(`div[data-key="85"]`).addEventListener('click',()=>{
//     key_85.currentTime = 0
//     key_85.play();
// })
// document.querySelector(`div[data-key="73"]`).addEventListener('click',()=>{
//     key_73.currentTime = 0
//     key_73.play();
// })
// document.querySelector(`div[data-key="79"]`).addEventListener('click',()=>{
//     key_79.currentTime = 0
//     key_79.play();
// })
// document.querySelector(`div[data-key="80"]`).addEventListener('click',()=>{
//     key_80.currentTime = 0
//     key_80.play();
// })