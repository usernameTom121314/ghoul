const waitBlock = document.querySelector('.wait');
console.log(waitBlock)
setTimeout(() => {
    wait()
}, 5000);

let wait = ()=>{
   waitBlock.style.display = 'none'
}

