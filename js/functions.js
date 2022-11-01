
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
    $(':input').css("border-color", "#ced4da");
}

function validaCampos() {
    var valida = true;

    if ((nome.val().trim()).length == 0) {
        nome.css("border-color", "red");
        valida = false;
    } else {
        nome.css("border-color", "#ced4da");
    }

    if ((profissao.val().trim()).length == 0) {
        profissao.css("border-color", "red");
        valida = false;
    } else {
        profissao.css("border-color", "#ced4da");
    }

    var regexEmail = /(.+)@(.+){1,}\.(.+){1,}/;
    if (regexEmail.test(email.val())) {
        email.css("border-color", "#ced4da");
    } else {
        email.css("border-color", "red");
        valida = false;
    }

    if (idade.val() < 1 || idade.val() > 150) {
        idade.css("border-color", "red");
        valida = false;
    } else {
        idade.css("border-color", "#ced4da");
    }

    var regexTel = /\(?\b([0-9]{2,3}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b/;
    if (telefone.val().match(regexTel)) {
        telefone.css("border-color", "#ced4da");
    } else {
        telefone.css("border-color", "red");
        valida = false;
    }

    return valida;
}

$("#adicionar").click(function () {
   /*let pessoa = {
        'nome': nome.val(),
        'email': email.val(),
        'idade': idade.val(),
        'profissao': profissao.val(),
        'telefone': telefone.val(),
        'data_preenchido': data.val()
    };*/

    let pessoa = {
        'name': nome.val(),
        'age': idade.val()
    };

    if (validaCampos()) {
        pessoas.push(pessoa);
        limpaCampos();
        //getPessoaByNome('a f');
        //getPessoasNomes();
        //createId();
        //getPessoaMaiorDeIdade();
        //getMediaIdade()
    }
});

$("#cancelar").click(function () {
    limpaCampos();
});

/** QUESTÃO 3 **/
function getPessoaByNome(namePessoa) {
    pessoas.forEach(function (item, index) {
        if (item.name == namePessoa) {
            //console.log(item);
            return item;
        }
    });
}

/** QUESTÃO 4 **/
function getPessoasNomes() {
    var pessoasNome = [];
    pessoas.forEach(function (item, index) {
        var nomeCompleto = item.name;
        pessoasNome.push(nomeCompleto.split(" ")[0]);
    });
    //console.log(pessoasNome);
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
        if (item.age > 17) {
            pessoasMaior17.push(item);
        }
    });
    //console.log(pessoasMaior17);
    return pessoasMaior17;
}

/** QUESTÃO 7 **/
function getMediaIdade() {
    var soma = 0.0;
    for (var i = 0; i < pessoas.length; i++) {
        soma = soma + parseInt(pessoas[i].age);
    }
    var media = soma / pessoas.length
    //console.log(soma + "/" + pessoas.length);
    //console.log(media);
    return media;
}