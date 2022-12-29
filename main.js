const form = document.getElementById('form-numbers');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('compo-b');
let formEValido = true

function validaCampo(campoA, campoB){
    const validaCampo = false;
    if(validaCampo === campoA > campoB){
        alert(validaCampo)
        return false;
} else{
    return true
}};

form.addEventListener('submit.click', function(e){

    e.preventDefoault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemDeSucesso = 'Os valores foram enviados com sucesso!';
    formEValido = validaCampo(campoA.value > campoB.value);

if(!formEValido){
    const containerMensagemDeSucesso = document.querySelector('.sucess-message');

    containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;

    containerMensagemDeSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';
} else{
    campoA.style.border = '1px solid red'
    document.querySelector('.sucess-mesage').style.display = 'block';
}
});

campoA.addEventListener('keyup', function(e){
    alert(e.target.value);
    formEValido = validaCampo(e.target.value);
    if(!formEValido){
        campoA.classList.add('error');
        document.querySelector('error-message').style.display = 'block';
    }
    else{
        campoA.classList.remove('.error');
        document.querySelector('.error-message').style.display = 'none';
    
    }
});