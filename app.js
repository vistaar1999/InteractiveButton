function myFunctionOn() {
  const a = document.getElementById("btn").value;
  const b = document
    .getElementById("image")
    .setAttribute("src", "ButtonOn.png");
  console.log(a);
}
function myFunctionOff() {
  const a = document.getElementById("btn1").value;
  const b = document
    .getElementById("image")
    .setAttribute("src", "ButtonOff.png");
}
