function filterTable() {
    const input = document.getElementById("filtroInput");
    const tabla = document.getElementById("miTabla");

    if (!input || !tabla) {
        return;
    }

    const filtro = input.value.toUpperCase(); 
    
    const tbody = tabla.getElementsByTagName("tbody")[0];
    if (!tbody) {
        return;
    }
    const filas = tbody.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {
        const fila = filas[i];
        const celdas = fila.getElementsByTagName("td");
        let coincide = false; 

        for (let j = 0; j < celdas.length; j++) {
            const celda = celdas[j];
            
            const textoCelda = celda.textContent || celda.innerText;
            
            if (textoCelda.toUpperCase().includes(filtro)) {
                coincide = true;
                break;
            }
        }

        if (coincide) {
            fila.style.display = ""; 
        } else {
            fila.style.display = "none"; 
        }
    }
}