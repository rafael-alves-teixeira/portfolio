document.querySelector(".hamburguer").addEventListener("click", () => 
document.querySelector(".headerContainer").classList.toggle("show-menu")
);


var audio = document.getElementById('audio');
var audioTocando = false;
document.querySelector('.control').onclick = function () {
    if (audioTocando) {
        audio.pause();
        audioTocando = false;
        var playButton = document.querySelector('.btPause');
        playButton.className = "btPlay";
        playButton.innerHTML = "<i class='fa-solid fa-volume-high'></i> Ouvir";
    } else {
        audio.play();
        audio.volume = 0.2;
        audioTocando = true;
        var playButton = document.querySelector('.btPlay')
        playButton.className = "btPause";
        playButton.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>  Pausar";
    }
}


function copiarLinkedin() {
    let textoCopiado = document.getElementById("texto1");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function copiarEmail() {
    let textoCopiado = document.getElementById("texto2");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function copiarTelefone() {
    let textoCopiado = document.getElementById("texto3");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
