//let content= document.getElementById("contenedor")

let numberBip=21955788; // variable donde se guarda el numero

function bipNumber(){
    fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
    .then(function(response){
        return response.json()
    })
    
    .then(function(data){
        console.log(data);
    })

    .then( function(screen){
        

    }

    )

    .catch(function(fail){
    console.log('fail',fail)

    })
    
}