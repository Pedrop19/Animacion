

const images = ['./img/nave.png', './img/nave2.png', './img/nave3.png', './img/alien1.png']

function crearNave(){
    let randomImage = images[Math.floor(Math.random() * images.length)];
    let width = Math.random() * 200;
    let left = Math.random() * (window.innerWidth - width);
    let top = -width;
    let imgElement = document.createElement('img');
    imgElement.className = 'nave';
    imgElement.id = 'naves';
    imgElement.src = randomImage;
    imgElement.width = width;
    imgElement.style.left = left + 'px';
    imgElement.style.top = top + 'px';

    document.body.appendChild(imgElement);
    setTimeout(crearNave, 3000);
}

function eliminarNave(){
    let img = document.getElementById('naves');
    document.body.removeChild(img);
}

setInterval(crearNave, 5000);
setInterval(eliminarNave, 5000);
