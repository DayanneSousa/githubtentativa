var elementos = [];
var topo = -1; // "começa com -1 por que o primeiro elemento é o 0, o -1 configura estar fora da pilha"
const max =10;

function push(num){
    if (topo < max ) {
        topo = topo + 1;
        elementos [topo] = num;
    }
    else{
        console. log("pilha está cheia")
    }
}
function estavazia(){
    return topo == -1;
}


function pop(){
    if (topo!= -1){
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    }
    else{
        console.log("pilha esta vazia")
    }
}