function validarFormulario(){
    var nome 		= document.getElementById("nome");
    var cpf 		= document.getElementById("cpf");
    var celular 	= document.getElementById("celular");
    var endereco 	= document.getElementById("endereco");
    var numero 		= document.getElementById("numero");
    
    if(nome.value==""){
        alert("O campo nome é obrigatório");
        nome.focus();
        return false;
    }
    if(cpf.value==""){
        alert("O campo cpf é obrigatório");
        cpf.focus();
        return false;
    }
    if(validaCpf(cpf.value)==false){
        alert("O CPF é inválido");
        cpf.focus();
        return false;
    }
    if(isValid(celular.value)==false){
        alert("O celular é inválido");
        celular.focus();
        return false;
    }
    if(celular.value==""){
        alert("O campo celular é obrigatório");
        celular.focus();
        return false;
    }
    if(endereco.value==""){
        alert("O campo endereco é obrigatório");
        endereco.focus();
        return false;
    }
    if(numero.value==""){
        alert("O campo numero é obrigatório");
        numero.focus();
        return false;
    }
    if(enviar){
        alert('Formulário enviado.');
        this.formulario.submit();
        return false;
    }
}

function validaCpf(val) {
    if (val.length == 14) {
        var cpf = val.trim();
     
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.split('');
        
        var v1 = 0;
        var v2 = 0;
        var aux = false;
        
        for (var i = 1; cpf.length > i; i++) {
            if (cpf[i - 1] != cpf[i]) {
                aux = true;   
            }
        } 
        
        if (aux == false) {
            return false; 
        } 
        
        for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
            v1 += cpf[i] * p; 
        } 
        
        v1 = ((v1 * 10) % 11);
        
        if (v1 == 10) {
            v1 = 0; 
        }
        
        if (v1 != cpf[9]) {
            return false; 
        } 
        
        for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
            v2 += cpf[i] * p; 
        } 
        
        v2 = ((v2 * 10) % 11);
        
        if (v2 == 10) {
            v2 = 0; 
        }
        
        if (v2 != cpf[10]) {
            return false; 
        } else {   
            return true; 
        }
    } 
        return false;
    }
    function isValid(p) {
        var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{5}$/;
        var digits = p.replace(/\D/g, "");
        return phoneRe.test(digits);
      }