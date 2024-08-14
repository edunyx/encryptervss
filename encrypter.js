function enfocar_texto2(){
    document.getElementById("texto2");
    texto2.focus(); // Enfocar el input al hacer clic en el botón

}

function enfocar_texto1(){
    document.getElementById("texto");
    texto.focus(); // Enfocar el input al hacer clic en el botón

}
enfocar_texto1();


function no_space_white1() {
    let blanco = document.getElementById("texto").value;

    if (blanco.length === 0) {
        showtextvacio_para_encriptar();
    } else if (blanco.replace(/\s/g, "").length === 0) {
        showDecryptAlert_espaciovacio();
    }
}

function no_space_white2() {
    let blanco = document.getElementById("texto").value;

    if (blanco.length === 0) {
        showDecryptAlert_no_mensaje_encriptado();
    } else if (blanco.replace(/\s/g, "").length === 0) {
        showDecryptAlert_espaciovacio();
    }
}


function no_space_white3() {
    let blanco = document.getElementById("texto2").value;

    if (blanco.length === 0) {
        showCopyAlert_nofound();
    } else if (blanco.replace(/\s/g, "").length === 0) {
        showDecryptAlert_espaciovacio();
    }
}


function btn_inicial_oculto() {
    document.getElementById('copiar').style.visibility = 'hidden';
    

}

function clean() {
    document.getElementById("texto").value = '';
    ajustarAltura(document.getElementById("texto")); // Ajusta la altura al limpiar
}

function ajustarAltura(textarea) {
    textarea.style.height = 'auto'; // Resetea la altura
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta la altura
}

// Llama a la función ajustarAltura cuando se ingresa texto
document.getElementById("texto").addEventListener("input", function() {
    ajustarAltura(this);
});

document.getElementById("texto2").addEventListener("input", function() {
    ajustarAltura(this);
});

function encriptar() {
    var texto = document.getElementById("texto").value.trim();

    // Verificar si el texto está vacío después de eliminar los espacios en blanco
    if (texto === "") {
        return no_space_white1();
    }

    // Si hay texto, proceder con el cifrado
    var textoCifrado = texto.replace(/e/igm, "enter")
                             .replace(/i/igm, "imes")
                             .replace(/a/igm, "ai")
                             .replace(/o/igm, "ober")
                             .replace(/u/igm, "ufat");

    document.getElementById("texto2").rows = 18; // Establecer un número fijo de filas
    document.getElementById("texto2").value = textoCifrado;
    hiddenelementos();
    document.getElementById('copiar').style.visibility = 'visible';
    clean();
    
    // Mostrar alerta de encriptación
    showEncryptAlert();
}

function desencriptar() {
    var texto = document.getElementById("texto").value.trim();

    // Verificar si el texto está vacío después de eliminar los espacios en blanco
    if (texto === "") {
        return no_space_white2();
    }
      var textoCifrado = texto.replace(/enter/igm, "e")
                             .replace(/imes/igm, "i")
                             .replace(/ai/igm, "a")
                             .replace(/ober/igm, "o")
                             .replace(/ufat/igm, "u");

    document.getElementById("texto2").rows = 18; // Establecer un número fijo de filas
    document.getElementById("texto2").value = textoCifrado;
    hiddenelementos();
    
    document.getElementById('copiar').style.visibility = 'visible';
    
    // Mostrar alerta de desencriptación
    showDecryptAlert();
}

function hiddenelementos() {
    document.getElementById('img').style.display = 'none';
    document.getElementById('txt1').style.display = 'none';
    document.getElementById('txt2').style.display = 'none';
}

function copiar() {


  
    var contenido = document.getElementById("texto2");
    if (contenido.value.trim() === "") {
        return no_space_white3(); // No hacer nada si el contenido está vacío
    }
    contenido.select();
    contenido.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(contenido.value)
        .then(() => {
            return  showCopyAlert() ,enfocar_texto2();

        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

function showCopyAlert_nofound() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡Ingrese texto para copiar!';
    document.body.appendChild(alert);

    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}

function showCopyAlert() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡Texto copiado al portapapeles!';
    document.body.appendChild(alert);

    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}

function showtextvacio_para_encriptar() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡Ingresa texto para encriptar!';
    document.body.appendChild(alert);

    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}

function showEncryptAlert() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡Texto encriptado exitosamente!';
    document.body.appendChild(alert);
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}

function showDecryptAlert() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡Texto desencriptado exitosamente!';
    document.body.appendChild(alert);
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}

function showDecryptAlert_vacio() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡No se detectó texto encriptado!';
    document.body.appendChild(alert);
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}

function showDecryptAlert_espaciovacio() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡Se detectó espacios vacíos!';
    document.body.appendChild(alert);
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}

function showDecryptAlert_no_mensaje_encriptado() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡Ingrese texto para desencriptar.';
    document.body.appendChild(alert);
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}

function showDecryptAlert_encripta_primero() {
    const alert = document.createElement('div');
    alert.classList.add('alert');
    alert.textContent = '¡Ingrese texto para encriptar!';
    document.body.appendChild(alert);
    alert.classList.add('show');
    setTimeout(() => {
        alert.classList.remove('show');
        alert.remove(); // Eliminar el elemento después de mostrar la alerta
    }, 3000);
}




btn_inicial_oculto();
