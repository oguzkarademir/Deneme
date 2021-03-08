var carName;

function myFunction(car, idName) {
  carName = car;
  document.getElementById(idName).innerHTML =
  typeof carName + " " + carName;
}

myFunction("Toyotta", "demo1");

myFunction("Volvo", "demo2");

document.getElementById("demo3").innerHTML = typeof carName;