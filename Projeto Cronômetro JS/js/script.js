window.onload = function () {

    var display = document.getElementById('display');

    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');

    var comecar = document.getElementById('comecar');

    var minutoAtual;
    var segundoAtual;

    var interval;

    for (let i = 0; i <= 60; i++) {
        minutos.innerHTML += '<option value="' + i + '">'+ i + '</option>';
    }

    for (let i = 1; i <= 60; i++) {
        segundos.innerHTML += '<option value="' + i + '">' + i + '</option>';
    }

    comecar.addEventListener('click', function() {
        minutoAtual = minutos.value;
        segundoAtual = segundos.value;

        // VERIFICANDO SE O NÚMERO É MENOR QUE 10 PARA MANTER FORMATAÇÃO DOS 2 ALGARISMOS
        var minutoAtualVisor
        var segundoAtualVisor

        if (minutoAtual < 10) {
            minutoAtualVisor = '0' + minutoAtual.toString();
        } else {
            minutoAtualVisor = minutoAtual.toString();
        }

        if (segundoAtual < 10) {
            segundoAtualVisor = '0' + segundoAtual.toString();
        } else {
            segundoAtualVisor = segundoAtual.toString();
        }
        ////

        display.childNodes[1].innerHTML = minutoAtualVisor + ":" + segundoAtualVisor;

        interval = setInterval(function () {

            segundoAtual--;
            if (segundoAtual <= 0) {
                if (minutoAtual > 0) {
                    segundoAtual = 59;
                    minutoAtual--;
                } else {
                    alert('Acabou!');
                    document.getElementById('sound').play();
                    clearInterval(interval);
                }
            }

            // VERIFICANDO SE O NÚMERO É MENOR QUE 10 PARA MANTER FORMATAÇÃO DOS 2 ALGARISMOS
            if (minutoAtual < 10) {
                minutoAtualVisor = '0' + minutoAtual.toString();
            } else {
                minutoAtualVisor = minutoAtual.toString();
            }

            if (segundoAtual < 10) {
                segundoAtualVisor = '0' + segundoAtual.toString();
            } else {
                segundoAtualVisor = segundoAtual.toString();
            }
            ////

            display.childNodes[1].innerHTML = minutoAtualVisor + ":" + segundoAtualVisor;

        }, 1000)
    });

}