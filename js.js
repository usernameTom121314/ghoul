    let x = 1000;
    let y = 1000;

    function test(){ 
    const bloc = document.querySelector('.container'),
    btn = document.querySelector('.btn'), 
    link = document.createElement('h1'),
    br = document.createElement('br');
    scrolldown(bloc.lastChild)    
    btn.style.display = "none" 
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



 
