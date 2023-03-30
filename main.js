document.addEventListener('DOMContentLoaded', function(){
    
    document.getElementById('sucess-mesage').addEventListener('click', function(e){
        e.preventDefault()
        let campoA = document.getElementById('campo-a').value;
        let campoB = document.getElementById('campo-b').value;
        campoA = parseInt(campoA);
        campoB = parseInt(campoB);

        if (campoA < campoB){
            console.log(campoA)
            document.getElementById('resultado').innerText = 'Valores enviados com sucesso.'
        }else{
            console.log(campoB)
            document.getElementById('resultado').innerText = 'Valores insuficiente. Tente novamente.'
        }
    });
});