$(function(){
    var $servico   = "http://api.postmon.com.br/v1/cep/";
    var $cep       = $("#cep");
    var $resultado = $("#resultado");
    $cep.focus();
    /**/
    $("#pesquisar").on("click", function(){
        $resultado.empty();
        $.getJSON(
            $servico + $cep.val()
        ).done(
            onCepDone
        ).fail(
            onCepFail
        );
    });
    /**/
    $cep.on("keypress", function(){
        $resultado.empty();
    });
    /**/
    function onCepDone(data){
        $resultado.html(
            "Endereço <br>" + 
            "Cep: " +data.cep +"<br>"+
            "Logradouro: " +data.logradouro +"<br>"+
            "Bairro: " + data.bairro +"<br>"+
            "Cidade: " +data.cidade +" - "+data.estado
        );
        $cep.val("").focus();
    }
    /**/
    function onCepFail(){
        $resultado.html(
            "Cep não localizado!"
        );
    }
    /*
     * Objeto simples
     * Mapa ou hashtable
     * por estar lidando com um dicionário, é possível
     * adicionar propriedades e métodos ao nosso objeto a qualquer momento.
     * 
     * Para o JavaScript, um objeto é apenas um dicionário contendo chaves e valores.
     */
    $("#jsObjetos").on("click", function(){
        var $res  = $("#resobj");
        var $nome = $("#nome");
        var $obj  = {
            nome : $nome.val(),
            data : new Date().toJSON().slice(0,10)
        };
        var $concatRes;
        $obj.sobreNome = "sem sobrenome";
        $res.empty();
        $obj.hello = function(){
            $concatRes = 
                "Olá, \'"+$obj.nome+"\' "+$obj.sobreNome+"!<br>"+
                "Data: "+$obj.data
            ;
        };
        $obj.hello();
        /**/
        function Funcionario(nome, cargo, salario){
            this.nome    = nome;
            this.cargo   = cargo;
            this.salario = salario;
        }
        var $objFuncionario = new Funcionario(
            $nome.val(), 
            "Programador", 
            15000
        );
        $concatRes += "<br>"+
            "<h3>Funcionario</h3>"+
            "Nome: "+$objFuncionario.nome +"<br>"+
            "Cargo: "+$objFuncionario.cargo +"<br>"+
            "Salário: "+$objFuncionario.salario
        ;
        /**/
        $res.html($concatRes);
    });
    /*
     * Testando herança
     */
    var $divHeranca = $("#resobjHeranca");
    $("#jsHerancaAnimal").on("click", function(){
        $divHeranca.empty();
        var $gato = new Animal();
        setTimeout(function(){
            $divHeranca.append($gato.comer()).show().fadeIn( "slow" );
        },800);
        setTimeout(function(){
            $divHeranca.append($gato.respirar()).show().fadeIn( "slow" );
        },2000);
    });
    /*
     * protótipos para herdar as características de outras classes
     */
    $("#jsHerancaMamifero").on("click", function(){
        $divHeranca.empty();
        Mamifero.prototype = new Animal();
        $mamifero = new Mamifero();
        setTimeout(function(){
            $divHeranca.append($mamifero.mamar()).fadeIn( "slow" );
        },800);
        setTimeout(function(){
            $divHeranca.append($mamifero.comer()).fadeIn( "slow" );
        },2000);
        setTimeout(function(){
            $divHeranca.append($mamifero.respirar()).fadeIn( "slow" );
        },3000);
    });
});