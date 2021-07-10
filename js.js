    let x = 1000;
    let y = 1000;
    const img = document.querySelector(`.img`),
    btn = document.querySelector('.btn');

    

    function test(){ 
    const bloc = document.querySelector('.container'), 
    link = document.createElement('h1'),
    br = document.createElement('br');
    scrolldown(bloc.lastChild)    
    y = y - 7
    link.innerHTML =  x +  " - 7 =" + y
    link.classList = 'text'
    bloc.appendChild(br)
    bloc.appendChild(link)
     x = x - 7
   setTimeout(() => {
       if(y != 6)test()
       else{
        link.innerHTML = "Я ГУЛЬ!!!"
        link.classList = 'text'
        bloc.appendChild(br)
        bloc.appendChild(link)
        }
   }, 100);
}



function scrolldown(e) {
    window.scroll({
        left: 0,
        top: e.offsetTop
    })
}

function callTest(){
    btn.style.display = "none" 
    setTimeout(() => {
        img.style.display = 'none'
        test()
    }, 5000);
}

function playMusic(){
    img.classList.add('imgOpen')
    var music = new Audio('files/letmidie.mp3');
    music.play();
    }
  
    