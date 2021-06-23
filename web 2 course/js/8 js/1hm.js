function green(){ 
  document.getElementById("inpt").style.borderColor = "#00FF00";//green
}
function norm(){  
  let input = document.querySelector('input');
  document.getElementById("inpt").style.borderColor = "black";
  if(input.value>0){    //good value
    document.getElementById("inpt").style.color="#00FF00"; //text color
    //це кажеться якись старий спосіб створення елемента, работає і ладно
    let para = document.createElement("span"); // new span    
     let node = document.createTextNode("Current price: "+input.value);     
     para.appendChild(node);
    let element=document.getElementById("span");
    element.appendChild(para);
  }
  if(input.value<0||input.value=='0')// bad value
  { 
    document.getElementById("inpt").style.borderColor = "#FF0000";
    input.insertAdjacentHTML('afterend', '<p>Please enter correct price</p>'); 
  }
}
function baton(){//очищення кнопки и всього остального
    document.getElementById("span").remove();
    document.getElementById("inpt").value="";
}