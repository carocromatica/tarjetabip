let saldoBip;


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
                saldoBip= Number(amountBip.replace(/[$,.]+/g,""));
                console.log(saldoBip);

                let dayBip = dataBip[3];
                document.getElementById("databip3").innerHTML = 'fecha de carga ' + dayBip;

            })


            .then (function calcularValorPasaje(){
                if (saldoBip > 720){
                    document.getElementById("alerta").innerHTML="saldo para horario punta";
                    console.log(saldoBip);
                }else if (saldoBip >680){
                    document.getElementById("alerta").innerHTML="saldo para horario normal";
                } else if (saldoBip>630){
                    document.getElementById("alerta").innerHTML="saldo para horario valle"
                }else if (saldoBip < 630){
                    document.getElementById("alerta").innerHTML="saldo insuficiente";
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





