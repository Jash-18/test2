function callFunc() {
  let ch = confirm("Are you sure you want to call");
  console.log(ch);
  if (ch === true) {
    callingFun(ch);
  }
}
function callingFun(ch) {
  var link = "tel:8074128616";
  window.location.href = link;
}
call = document.getElementById("call");
call.addEventListener("click", callFunc);
