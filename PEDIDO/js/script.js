const btnN=document.getElementById("btnN");
const btnS=document.getElementById("btnS");
const divAceito=document.getElementById("divAceito");
const corpoPedido=document.getElementById("corpoPedido");

let largura=400;
let altura=200;

btnN.addEventListener("mouseover",()=>{
    let px=Math.floor(Math.random()*(largura));
    let py=Math.floor(Math.random()*(altura));
    btnN.setAttribute("style",`left:${px}px;top:${py}px`);
})
btnS.addEventListener("click",()=>{
    divAceito.setAttribute("style","display:block;");
    corpoPedido.setAttribute("style","display:none;");
})