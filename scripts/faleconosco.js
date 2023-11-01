const estadosBrasil = [
    { nome: 'Acre', sigla: 'AC' },
    { nome: 'Alagoas', sigla: 'AL' },
    { nome: 'Amapá', sigla: 'AP' },
    { nome: 'Amazonas', sigla: 'AM' },
    { nome: 'Bahia', sigla: 'BA' },
    { nome: 'Ceará', sigla: 'CE' },
    { nome: 'Distrito Federal', sigla: 'DF' },
    { nome: 'Espírito Santo', sigla: 'ES' },
    { nome: 'Goiás', sigla: 'GO' },
    { nome: 'Maranhão', sigla: 'MA' },
    { nome: 'Mato Grosso', sigla: 'MT' },
    { nome: 'Mato Grosso do Sul', sigla: 'MS' },
    { nome: 'Minas Gerais', sigla: 'MG' },
    { nome: 'Pará', sigla: 'PA' },
    { nome: 'Paraíba', sigla: 'PB' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Pernambuco', sigla: 'PE' },
    { nome: 'Piauí', sigla: 'PI' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Rio Grande do Norte', sigla: 'RN' },
    { nome: 'Rio Grande do Sul', sigla: 'RS' },
    { nome: 'Rondônia', sigla: 'RO' },
    { nome: 'Roraima', sigla: 'RR' },
    { nome: 'Santa Catarina', sigla: 'SC' },
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Sergipe', sigla: 'SE' },
    { nome: 'Tocantins', sigla: 'TO' }
  ];
  
function dizerOla(){
    alert ("ola")
}

function verOutros(){
    const outros = document.getElementById('outros')
    const genero = document.getElementsByName('genero')
    if (genero [2].checked){
        outros.hidden = false
    }else{
        outros.hidden = true
    }
}
function verEstados() {
    const estados = document.getElementById("estados")
    const nacionalidade = document.querySelector('#nacionalidade')
    if (nacionalidade.value == 'BR'){
        for (let i = 0; i<estadosBrasil.length; i++){
            let option = document.createElement('option')
            option.textContent = estadosBrasil[i].nome
            option.setAttribute('value', estadosBrasil[i].sigla)
            estados.appendChild(option)
        }
        estados.disabled = false
    }else{
        estados.disabled = true
    }
}
function verSenha(){
    const senha1 = document.getElementById('senha1')
    const senha2 = document.getElementById('senha2')
    const btnVer =  document.getElementById('btnVer')

    if (senha1.type == 'password' || senha2.type == 'password'){
        senha1.type = 'text'
        senha2.type = 'text'
        btnVer.value = "Esconder"
    }else {
        senha1.type = 'password'
        senha2.type = 'password'
        btnVer.value = "Ver"
    }
}
function cpf(){
    let v = document.getElementById('cpf').value
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    document.getElementById('cpf').value = v
}
function validarCep(){
    const cep = document.getElementById('cep').value
    if (cep == ''){
        alert (' cep vazio')
    }else if (cep.length != 8){
        alert ("CEP inválido")
    }else{
        viaCep (cep)
    }
}
function viaCep (cep){
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then((response)=> response.json())
    .then (response => {
        document.getElementById('logradouro').value = response.logradouro
        document.getElementById('bairro').value = response.bairro
        document.getElementById('cidade').value = response.localidade
        document.getElementById('uf').value = response.uf

    })
}
function digitar(){
    const logradouro = document.getElementById('logradouro').disabled
    if (logradouro){
        document.getElementById('logradouro').disabled = false
        document.getElementById('bairro').disabled = false
        document.getElementById('cidade').disabled = false
        document.getElementById('uf').disabled = false
    }else{
        document.getElementById('logradouro').disabled = true
        document.getElementById('bairro').disabled = true
        document.getElementById('cidade').disabled = true
        document.getElementById('uf').disabled = true
    }
}