let nomeUsuário= "";
let elemento= document.queryselector("#nome-usuario");


while(nomeUsuário==""){
    nomeUsuário= prompt("qual o seu nome?")
}

if(nomeUsuário==null){
    elemento. TextContent = "seja muito bem-vindo";
}else{
    elemento. TextContent = nomeUsuário;
}
