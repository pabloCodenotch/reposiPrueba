
// SUMA

let suma = (operation="sum",v1,v2=0,v3) => {if(operation == "sum")
{
    let resultado = v1 + v2 + v3;
    return resultado;
}}

// RESTA

let resta = (operation="subs",v1,v2=0) => {if(operation == "subs")
{
    let resultado = v1 - v2;
    return resultado;
}}

// MULTIPLICACION

let producto = (operation="mult",v1,v2=0) => {if(operation == "mult")
{
    let resultado = v1 * v2;
    return resultado;
}}

// DIVISION

let division = (operation="div",v1,v2=0) => {if(operation == "div")
{
    let resultado = v1 / v2;
    return resultado;
}}

function cuadrado(v1)
{
    let resultado = v1*v1;
    return resultado;
}

// console.log(producto("mult",2,5))

console.log(cuadrado(2));

module.exports= {suma,resta,producto,division,cuadrado}