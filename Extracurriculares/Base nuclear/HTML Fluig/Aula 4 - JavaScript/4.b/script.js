
function myFunction(){
    document.getElementById("demo").innerHTML = "Texto alterado"
}

function muda(){
     document.getElementById("outro").innerHTML = "Mudei o nome no select e alterei o contéudo outro"
 }


 function mudarCorDeFundo() {

    // Verifica a cor atual da div e alterna entre azul e vermelho

    if (minhaDiv.style.backgroundColor === "black") {

      minhaDiv.style.transition = "background-color 1s";

       minhaDiv.style.backgroundColor = "white";

       minhaDiv.style.color = "black"

    } else {

      minhaDiv.style.transition = "background-color 1s";

      minhaDiv.style.backgroundColor = "black";

      minhaDiv.style.color = "white"

    }

  }