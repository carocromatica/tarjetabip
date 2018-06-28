//let content= document.getElementById("contenedor")

let numberBip=12844501; // variable donde se guarda el numero

function bipNumber(){
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
    .then(function(response){
        return response.json()
    })
    
    .then(function(data){ //usar object.keys?
        
        const infoBip = Object.values(data) // se puede cambiar por object.keys o object.values 
        console.log(infoBip[0])
        console.log(infoBip[1])
        console.log(infoBip[2])
        console.log(infoBip[3])

        let bip1= infoBip[0];
        document.getElementById("databip").innerHTML ='numero de bip '+ bip1;

        let bip2= infoBip[1];
        document.getElementById("databip1").innerHTML ='Status '+ bip2;

        let bip3= infoBip[2];
        document.getElementById("databip2").innerHTML ='saldo '+ bip3;

        let bip4= infoBip[3];
        document.getElementById("databip3").innerHTML ='fecha de carga '+ bip4;
       

        console.log(infoBip);
        console.log(data);
    })
  
    .catch(function(fail){
    console.log('fail',fail)

    })
    
}

// función para convertir object en array