function add() {
  var img = document.createElement('img');
  img.src ='https://www.iti.gov.eg/assets/images/iti-logo.png';
  document.getElementById('div').appendChild(img);
}

function deleteChild() {
  var e = document.querySelector("div");
  e.innerHTML = "";
}
var btn = document.getElementById(
"btn").onclick = function() {
  deleteChild();
}


// alert(element.childNodes.length);



// function del()
// {
//   var btn = document.getElementById("btn").onclick = function() 
//   {
//     deleteChild();
//   }


//   var x = document.querySelector("button");
//   while (child) {
//     x.removeChild(child);
//     child = x.lastElementChild;
// }
// }
