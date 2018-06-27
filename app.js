//let content= document.getElementById("contenedor")

let numberBip=18862002; // variable donde se guarda el numero

function bipNumber(){
    const link= fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
    .then(function(response){
        return response.json()
    })
    
    .then(function(data){ //usar object.keys?
        
        const infoBip = Object.keys(link).map(i => link[i])
        console.log(infoBip);

          console.log(data);
    })
  
    .catch(function(fail){
    console.log('fail',fail)

    })
    
}

// función para convertir object en array