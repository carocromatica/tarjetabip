//let content= document.getElementById("contenedor")

let numberBip=12844501; // variable donde se guarda el numero

function infoBip(){
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
    .then(function(response){
        return response.json()
    })
    
    .then(function(data){ //usar object.keys?
        
        const dataBip = Object.values(data) // se puede cambiar por object.keys o object.values 
       
        console.log(dataBip[0])
        console.log(dataBip[1])
        console.log(dataBip[2])
        console.log(dataBip[3])

        let numberBip= dataBip[0];
        document.getElementById("databip").innerHTML ='numero de bip '+ numberBip;

        let statusBip= dataBip[1];
        document.getElementById("databip1").innerHTML ='Status '+ statusBip;

        let amountBip= dataBip[2];
        document.getElementById("databip2").innerHTML ='saldo '+ amountBip;

        let dayBip= dataBip[3];
        document.getElementById("databip3").innerHTML ='fecha de carga '+ dayBip;
       
    })
  
    .catch(function(fail){
    console.log('fail',fail)

    })
    
}

// función para convertir object en array