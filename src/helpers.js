export function calcularTotal(cantidad, plazo){
    // calcular cantidad
    let totalCantidad;
    if(cantidad <= 1000){
        totalCantidad = cantidad * .25;
    } else if(cantidad > 1000 && cantidad <= 5000){
        totalCantidad = cantidad * .20;
    } else if(cantidad > 5000 && cantidad <= 10000){
        totalCantidad = cantidad * .15;
    } else if(cantidad > 10000){
        totalCantidad = cantidad * .10;
    } 
    
    // calcular plazo
    let totalPlazo = 0;
    switch(plazo){
        case 3: 
            totalPlazo = cantidad * 0.05;
            break;
        case 6: 
            totalPlazo = cantidad * 0.1;
            break;
        case 12: 
            totalPlazo = cantidad * 0.15;
            break;
        case 24: 
            totalPlazo = cantidad * 0.2;
            break;
        default:
            break;
        
    }
    return totalPlazo + totalCantidad + cantidad;
    
}