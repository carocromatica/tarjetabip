let saldoBip; // será ingresado por el usuario
let saldoFinal; // obvio :v
let valorPasaje; // cuando el usuario selecciona segun horario

window.onload = function getBip() {

    document.getElementById("btn").onclick = function () {
        let numberBip = document.getElementById("bipCard").value;

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
                saldoBip = Number(amountBip.replace(/[$,.]+/g, ""));


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

            .then( function horarios() {
                let pasaje= document.getElementById("selector").value;
                console.log(pasaje);

                if (pasaje=="horario valle"){
                    valorPasaje=620;
                    saldoFinal=saldoBip-valorPasaje;
                    console.log(saldoFinal);
                    document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;

                }else if (pasaje =="horario normal"){
                    valorPasaje=680;
                    saldoFinal=saldoBip-valorPasaje;
                    console.log(saldoFinal);
                    document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;

                } else if (pasaje=="horario punta"){
                    valorPasaje=760;
                    saldoFinal=saldoBip-valorPasaje;
                    console.log(saldoFinal);
                    document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;
                }
         
            }
                
            )

            .catch(function (fail) {
                console.log('fail', fail)

            })

        // fin fetch


    } // fin llamada boton
}// fin windows.onload

// para mostrar saldo





