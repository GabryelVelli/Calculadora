function somar(a, b){
   return a + b;
}

function subtrair(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function divisao(a,b){
    if( b == 0){
        return 'Erro: divisão por zero';
    }else {
        return a/b;
    }   
}

function calcular(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operacao = document.getElementById('operacao').value;
    let resultado= document.getElementById('resultado');

    num1 = Number(num1);
    num2 = Number(num2);

    if(isNaN(num1) || isNaN(num2)){
        resultado.innerHTML = `Por Favor, Inserir um Numero Valido`;
        return;
    }
    let res;
    switch(operacao){
        case 'soma':
            res = somar(num1,num2)
            break;
        case 'subtracao':
            res = subtrair(num1,num2)
            break;
        case 'multiplica':
            res = multiplicar(num1, num2)
            break;
        case 'divisao':
            res = divisao(num1,num2)
            break;
        default:
            res = 'Operação Invalida';
    }
    resultado.innerHTML = `O Resultado da Operação é: ${res}`
}