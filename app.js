let saldoBip; // salgo actual del usuario
let saldoFinal; // saldo al que se le resta valor del pasaje
let valorPasaje; // cuando el usuario selecciona segun horario
let numberBip; // numero de serie ingresado por el usuario
let serieBip; // numero de serie bip en selector


// numeros series bip de prueba : 18757476, 15487695 , 

window.onload = function getBip() {

    document.getElementById("btn").onclick = function () { // cuando se hace click en el boton, despliega toda la info que viene a continuación
    
    function desactivar(){ // tratando de hacer funcion para desactivar select si input està activo
    if ( document.getElementById("bipcard").addEventListener(keypress)){
        document.getElementById("selectorBip").disable=true;

    }

    }
        

    if (numberBip = document.getElementById("bipCard").value){
        console.log(numberBip);

    } else{   

        numberBip = document.getElementById("selectorBip").value; // sacaremos el numero de bip desde un selector
        serieBip=numberBip; // el valor del selector lo guardaremos en una nueva variable
        console.log(serieBip);

        for( i= 0; i<serieBip.length; i++){
            numberBip=serieBip;

            console.log(serieBip+ " veamos que pasa")
            console.log(numberBip+ " chan")

        }

    }
    

        fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
            .then(function (response) {
                return response.json();
            })
          

            .then(function (data) { //usar object.keys?

                const dataBip = Object.values(data) // se puede cambiar por object.keys o object.values 

                let numberBip = dataBip[0];
                document.getElementById("databip").innerHTML = 'numero de bip ' + numberBip;

                let statusBip = dataBip[1];
                document.getElementById("databip1").innerHTML = 'Status ' + statusBip;

                let amountBip = dataBip[2];
                document.getElementById("databip2").innerHTML = 'saldo ' + amountBip;
                saldoBip = Number(amountBip.replace(/[$,.]+/g, "")); // tranforma bip a number para calcular saldo

                let dayBip = dataBip[3];
                document.getElementById("databip3").innerHTML = 'fecha de carga ' + dayBip;

            })


            /* .then(function calcularValorPasaje() { // podría hacerlo con un case break :emoji pensativo:
                 if (saldoBip > 720) {
                     saldoFinal = saldoBip - 720;
                     document.getElementById("alerta").innerHTML = "saldo para horario punta";
                     document.getElementById("saldo").innerHTML = "tu saldo a final es" + saldoFinal;
 
                 } else if (saldoBip > 680) {
                     document.getElementById("alerta").innerHTML = "saldo para horario normal";
                     saldoFinal = saldoBip - 680;
                     document.getElementById("saldo").innerHTML = "tu saldo a final es " + saldoFinal;
                 } else if (saldoBip > 630) {
                     document.getElementById("alerta").innerHTML = "saldo para horario valle"
                     saldoFinal = saldoBip - 630;
                     document.getElementById("saldo").innerHTML = "tu saldo a final es " + saldoFinal;
                 } else if (saldoBip < 630) {
                     document.getElementById("alerta").innerHTML = "saldo insuficiente";
                 }
 
             }
 
             )*/

            .then(function horarios() { // función que determina valor final del saldo según horario escogido.
                let pasaje = document.getElementById("selector").value;
                console.log(pasaje);

                if (saldoBip <= 619) {
                    document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoBip + " necesitas recargar";
                }

                else if (pasaje == "horario valle") {
                    valorPasaje = 620;
                    saldoFinal = saldoBip - valorPasaje;
                    console.log(saldoFinal);
                    document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;

                } else if (pasaje == "horario normal") {
                    valorPasaje = 680;
                    saldoFinal = saldoBip - valorPasaje;
                    console.log(saldoFinal);
                    document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;

                } else if (pasaje == "horario punta") {
                    valorPasaje = 760;
                    saldoFinal = saldoBip - valorPasaje;
                    console.log(saldoFinal);
                    document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;

                }

            })

            

            .catch(function (fail) {
                console.log('fail', fail)

            })

        // fin fetch


    } // fin llamada boton
}// fin windows.onload

// para mostrar saldo





