const llamandoFetch=()=>{
    const url = "/html/servicio.json";
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => mostrarDatos(datos))
    .catch((reject)=>{
        console.log("Ocurrio un error");
        
    })
    const mostrarDatos=(data)=>{
        let tabla = document.getElementById('tabla');
        let total = document.getElementById('total')
        let totalGanancia = 0;
        for(let item of data){
            if(item.idcliente % 2 === 0){
            totalGanancia+=(item.preciovta * item.preciocompra) * item.cantidad
            tabla.innerHTML+= "<tr id='fila_1'><td>"+ item.codigo +"</td>" +
            "<td>"+ item.idcliente +"</td>" +
            "<td>"+ item.descripcion +"</td>" +
            "<td>"+ item.cantidad +"</td>" +
            "<td>"+ item.preciovta +"</td>" +
            "<td>"+ item.preciocompra +"</td>" +
            "<td>$"+ (item.preciovta * item.preciocompra) * item.cantidad +"</td>"
            total.innerHTML = "<h2> Totales Ganancia: $" + totalGanancia + "</h2>"  
            }
            if(item.idcliente % 2 === 1){
            totalGanancia+=(item.preciovta * item.preciocompra) * item.cantidad
            tabla.innerHTML+= "<tr id='fila_2'><td>"+ item.codigo +"</td>" +
            "<td>"+ item.idcliente +"</td>" +
            "<td>"+ item.descripcion +"</td>" +
            "<td>"+ item.cantidad +"</td>" +
            "<td>"+ item.preciovta +"</td>" +
            "<td>"+ item.preciocompra +"</td>" +
            "<td>$"+ (item.preciovta * item.preciocompra) * item.cantidad +"</td>"

            total.innerHTML = "<h2> Totales Ganancia: $" + totalGanancia + "</h2>"   
            }
 
            
            
        }
        
    }
}

window.onload = llamandoFetch();
