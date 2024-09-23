let nombreGasto = document.getElementById("nombreGasto")
let valorGasto = document.getElementById("valorGasto")
const listaDeGastos = document.getElementById("listaDeGastos")
let totalGastos = document.getElementById("totalGastos")

let ListaNombreGastos = []
let listaValorGastos = []


function clickBoton() {

    if(nombreGasto.value.trim() === "" || valorGasto.value.trim() === "") {
        alert("Escriba el nombre y el monto del gasto")
    }else {
        console.log(nombreGasto.value, valorGasto.value)
    
        ListaNombreGastos.push(nombreGasto.value)
        listaValorGastos.push(valorGasto.value)
       
        actualizarListaGastos()
    
        nombreGasto.value = "";
        valorGasto.value = "";  

    }
    
}

function actualizarListaGastos() { 
    let htmlList = '';
    let totalG = 0;    
   
    ListaNombreGastos.forEach((elemento, posicion) => { 
        const valorGasto = Number(listaValorGastos[posicion]);

        htmlList += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
                        <button onclick="eliminarGasto(${posicion})"> X </button>
                    </li>`
   
        totalG += Number(valorGasto.toFixed(2))
    })        

    listaDeGastos.innerHTML = htmlList
    totalGastos.innerText = totalG
    
}


function eliminarGasto(posicion) {
    ListaNombreGastos.splice(posicion,1)
    listaValorGastos.splice(posicion,1)
    actualizarListaGastos()         

}

