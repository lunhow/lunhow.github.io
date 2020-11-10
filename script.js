const demo = document.getElementById("container");
const title = demo.innerHTML;
const cArray = title.split('');
console.log(cArray);

function divWrapper(x, index){
  return "<div class='text' style='animation-delay:" + index*2 + "s'>" + x + "</div>"
}
console.log(cArray.map(divWrapper))
var result=cArray.map(divWrapper).join("")
//console.log(result)
demo.innerHTML=result
/*
for(var i=0;i<cArray.length;i++){
  cArray[i]="<div>"+cArray[i]+"</div>"
}
*/
//console.log(cArray)