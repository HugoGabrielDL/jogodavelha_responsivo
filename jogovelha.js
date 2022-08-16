var player = "X";
var numJog = 0;

var playing = true;

function checkjogo(id) {

    var opt = verificarSrc(id)

    if (opt == "transp.png" && playing) {

        document.getElementById(id).src = "img/" + player + ".png";

        if (player == "X") {
            player = "O";

        } else {
            player = "X";

        }

        var pc = document.getElementById('_bot').checked;

        if(pc && player == 'O'){
            checkjogo(BOT());
        }
    }

    numJog++;
    
    if (wincheck()) {
        alert("Fim de jogo " + player + " venceu!");
        playing = false;
        return false;

        //location.reload();
    }
    if (numJog == 9) {
        alert("Fim de jogo!! deu velha!!!");
        playing = false;
        return false;
        //location.reload();
    }

     
function BOT(){

    // alert(document.getElementById('c5').src);

    if(verificarSrc('c5') == 'transp.png'){
        return 'c5';
    }


    var cRand = document.getElementById(`c${Math.floor(Math.random() * 9 + 1)}`);

    if(verificarSrc(cRand.id) == 'transp.png'){
        return cRand.id;
    }

    return BOT();
}
}

function verificarSrc(id) {

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);

}

// Verificação -- 
function wincheck() {

    if ((verificarSrc('c1') == verificarSrc('c4')) && (verificarSrc('c1') == verificarSrc('c7')) && verificarSrc('c1') != "transp.png") {
        return true;
    }

    if ((verificarSrc('c2') == verificarSrc('c5')) && (verificarSrc('c2') == verificarSrc('c8')) && verificarSrc('c2') != "transp.png") {
        return true;
    }

    if ((verificarSrc('c3') == verificarSrc('c6')) && (verificarSrc('c3') == verificarSrc('c9')) && verificarSrc('c3') != "transp.png") {
        return true;
    }

    if ((verificarSrc('c1') == verificarSrc('c2')) && (verificarSrc('c1') == verificarSrc('c3')) && verificarSrc('c1') != "transp.png") {
        return true;
    }

    if ((verificarSrc('c4') == verificarSrc('c5')) && (verificarSrc('c4') == verificarSrc('c6')) && verificarSrc('c4') != "transp.png") {
        return true;
    }

    if ((verificarSrc('c7') == verificarSrc('c8')) && (verificarSrc('c7') == verificarSrc('c9')) && verificarSrc('c7') != "transp.png") {
        return true;
    }


    if ((verificarSrc('c3') == verificarSrc('c5')) && (verificarSrc('c3') == verificarSrc('c7')) && verificarSrc('c3') != "transp.png") {
        return true;

    }

    if ((verificarSrc('c1') == verificarSrc('c5')) && (verificarSrc('c1') == verificarSrc('c9')) && verificarSrc('c1') != "transp.png") {
        return true;
    }

    return false;
}
// fim verificação-- 
