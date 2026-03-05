const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const botaoSomar =  document.getElementById("btnSomar");
const botaoSubtrair =  document.getElementById("btnSubtrair");
const botaoMultiplicar =  document.getElementById("btnMultiplicar");
const botaoDividir =  document.getElementById("btnDividir");
const botaoLimpar =  document.getElementById("btnLimpar");
const pResultado =  document.getElementById("resultado");

//declaraçaõ da função acontec e com//
//palavra reservada "function" + nome da função +//


// validaçãoes e tratamento de exeções //
function somar() {
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;
    
    // || = OU //
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "prencha dois campos!";
        return;

    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1)|| isNaN(numero2)){
        pResultado.textContent ="digite apenas números validos!";
        return;
    };

        const soma = numero1+numero2;

        pResultado.textContent ="Resultado: " + soma;


}
// evento que realiza a soma sendo chamada com click //
botaoSomar.addEventListener("click", somar);

//função subtrair //

function subtrair() {
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;
    
    // || = OU //
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "prencha dois campos!";
        return;

    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1)|| isNaN(numero2)){
        pResultado.textContent ="digite apenas números validos!";
        return;
    };

        const subtrair = numero1-numero2;

        pResultado.textContent ="Resultado: " + subtrair;


}
    // evento que realiza a soma sendo chamada com click //
    botaoSubtrair.addEventListener("click", subtrair);
    
    // função multiplicar //
    function multiplicar() {
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;
    
    // || = OU //
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "prencha dois campos!";
        return;

    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1)|| isNaN(numero2)){
        pResultado.textContent ="digite apenas números validos!";
        return;
    };

        const multiplicar = numero1*numero2;

        pResultado.textContent ="Resultado: " + multiplicar;


}
    // evento que realiza a soma sendo chamada com click //
    botaoMultiplicar.addEventListener("click", multiplicar);

    // função dividir //
    function dividir() {
    const valor1 = inputNum1.value;
    const valor2 = inputNum2.value;
    
    // || = OU //
    if (valor1 === "" || valor2 === "") {
        pResultado.textContent = "prencha dois campos!";
        return;

    };

    const numero1 = Number(valor1);
    const numero2 = Number(valor2);

    if(isNaN(numero1)|| isNaN(numero2)){
        pResultado.textContent ="digite apenas números validos!";
        return;
    
    };
        if (numero2 === 0){
            pResultado.textContent ="digite um valor que nãoseja zero.";
            return;

        }

        const dividir= numero1/numero2;
        pResultado.textContent ="Resultado: " + subtrair;


}
    // evento que realiza a soma sendo chamada com click //
    botaoDividir.addEventListener("click", dividir);





    function limpar() {
        inputNum1.value = "";
        inputNum2.value = "";
        pResultado.textContent = "Resultado: ";
    };

botaoLimpar.addEventListener("click", limpar);  







