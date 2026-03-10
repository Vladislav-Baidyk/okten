/**
 #8Nmt60ZT

– створити блок,

– додати йому класи wrap, collapse, alpha, beta

– додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту

– додати цей блок в body.

– клонувати його повністю, та додати клон в body.
 */
document.body.style.padding = "0px";
document.body.style.margin = "0px";
let block = document.createElement("div");
let blockContent = document.createTextNode("hello that;s me");
block.appendChild(blockContent);
block.classList.add('wrap', 'collapse' , 'alpha', 'beta');
block.style.background = "red";
block.style.color = "black";
block.style.fontSize = "41px";    
document.body.appendChild(block);

