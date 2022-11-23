const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
    
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = 'src/img/ligada.png';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = 'src/img/desligada.png';
    }
}

function lampBroken () {
    lamp.src = 'src/img/quebrada.png';
}

function alerta() {
   lamp = alert('Ops 👀 👀 ⁉ pressione🆗')
}

function changeColor (color) {
    document.body.style.backgroundColor = color;
   
}

function changeTurnOn() {
    if(isLampBroken()){
        changeColor(black);
    }
     changeColor('rgba(219, 206, 14, 0.788');
}

function changeTurnOff() {
    changeColor('black') ;
 }


turnOn.addEventListener ( 'click', lampOn,);
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );
lamp.addEventListener('dblclick',alerta);