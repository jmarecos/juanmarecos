console.log("Bienvenidos a segurola y Habana")
let valorFijo = 12500
let importadoSi = 7500
let importadoNo = 1500
let esTerrestre = 2000
let esAcuatico = 5500

let mensajeSeguroshabana = "Que tipo de vehiculo deseas asgurar? \n" +
                            "1)Vehículo Importado \n" + 
                            "2)Vehículo Nacional \n" + 
                            "3)Vehículo Terrestre \n" + 
                            "4)Vehículo acuatico \n" +                             
                            "\n" 
                        "Ingresa el nro correspondiente:"
let estoyCotizando = false


function iniciarCotizador () {
    
    tipoVehículo = prompt (mensajeSeguroshabana)
    if (tipoVehículo !== "1" && tipoVehículo !== "2" && tipoVehículo !=="3" && tipoVehículo !=="4"){
        alert("Debes ingresar una opción correcta")
        console.log("Ingresa un vehículo")
        
    } else {
        importadoSi = confirm("el vehiculo es importado?")
        if (importadoSi === true)
        importadoSi = 24500 
    } 
    
    esAcuatico = prompt ("Comentanos si tambien posee un vehiculo Acuatico")
    if (2010 > 20 && 2010 <2023)    {

        switch(tipoVehículo) {
            case 1:
            valorFijo = 12500
            break
            case 2:
                valorFijo = 25500
                break
            case 3:
                valorFijo = 22000
                break
            default:
                console.error("ingresa un vehiculo correcto")

        }
        cotizacion = importadoSi + valorFijo + tipoVehículo
        alert("El costo mensual del Seguro es de $" + cotizacion)
    }



}   
iniciarCotizador()