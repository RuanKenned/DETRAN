
/** DECLARAÇÃO DE VARIÁVEIS E FUNÇÔES GLOBAIS **/
var nome = $("#input_nome");
var email = $("#input_email");
var idade = $("#input_idade");
var profissao = $("#input_profissao");
var telefone = $("#input_telefone");
var data = $("#input_data");
var pessoas = [];

function limpaCampos() {
    nome.val("");
    email.val("");
    idade.val("");
    profissao.val("");
    telefone.val("");
    data.val("");
}

/** QUESTÃO 2 **/
$("#adicionar").click(function () {
    let pessoa = {
        'nome': nome.val(),
        'email': email.val(),
        'idade': idade.val(),
        'profissao': profissao.val(),
        'telefone': telefone.val(),
        'data_preenchido': data.val()
    };
    pessoas.push(pessoa);
    limpaCampos();
});

/** QUESTÃO 3 **/
function getPessoaByNome(namePessoa) {
    pessoas.forEach(function (item, index) {
        if (item.nome == namePessoa) {
            console.log(item);
            return item;
        }
    });
}

/** QUESTÃO 4 **/
function getPessoasNomes() {
    var pessoasNome = [];
    pessoas.forEach(function (item, index) {
        var nomeCompleto = item.nome;
        pessoasNome.push(nomeCompleto.split(" ")[0]);
    });
    console.log(pessoasNome);
    return pessoasNome;
}

/** QUESTÃO 5 **/
function createId() {
    pessoas.forEach(function (item, index) {
        item.id = index;
    });
}

/** QUESTÃO 6 **/
function getPessoaMaiorDeIdade() {
    var pessoasMaior17 = [];
    pessoas.forEach(function (item, index) {
        if (item.idade > 17) {
            pessoasMaior17.push(item);
        }
    });
    console.log(pessoasMaior17);
    return pessoasMaior17;
}

/** QUESTÃO 6 **/
function getMediaIdade() {
    var soma = 0.0;
    for (var i = 0; i < pessoas.length; i++) {
        soma = soma + parseInt(pessoas[i].idade);
    }
    var media = soma / pessoas.length
    console.log(soma + "/" + pessoas.length);
    console.log(media);
    return media;
}