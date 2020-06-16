// console.log("hola mundo, estoy en JS");
//
// //DOM
// let link = document.querySelectorAll("a");
// link.forEach(function(link)
// {
//   console.log(link);
// });
//
// variable = document.selector(nombre del componente)
// imprimir(componente);

// let celdas = document.querySelectorAll("td");
// celdas.forEach(function(td)
// {
//     td.addEventListener("click",function () {
//       console.log(this);
//       })
// });

//  1- obtener los elementos de la calse close
  let links = document.querySelectorAll(".close");
//  2- recorrerlos
  links.forEach(function (link) {
//  3- agregar un evento clik a cada uno de ellos - clase sensitive
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
  //quitarle las clases de animacion que ya addEventListener
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");
  //agregar clases para animar su salida --> animate__fadeOutUp
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function () {          //timer
        location.href = "/notas-rtb";
      },700);

        return false;
    });
  });
