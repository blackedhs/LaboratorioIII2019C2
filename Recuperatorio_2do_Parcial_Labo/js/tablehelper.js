function CrearTabla(datos) {
    table = document.createElement('table');
    table.className = 'table tabla table-bordered table-striped table-hover'
    tbody = document.createElement('tbody');
    cabecera = document.createElement('tr');
    cabecera.className = 'thead-dark';
    for (dato in datos[0]) {
        th = document.createElement('th');
        if (dato.charAt(0) === dato.charAt(0).toUpperCase()) {
            th.textContent = dato;
            cabecera.appendChild(th);
        }
    }
    tbody.appendChild(cabecera);
    table.appendChild(tbody);
    for (dato in datos) {
        if (datos[dato] != 'constructor') {
            tr = document.createElement('tr');
            tr.className = 'table-primary';
            obj = datos[dato];
            for (j in obj) {
                if (j.charAt(0) === j.charAt(0).toUpperCase()){
                    td = document.createElement('td');
                    td.textContent = obj[j];
                    tr.appendChild(td);
                }
            }
            tbody.appendChild(tr);
            table.appendChild(tbody);
        }
    }
    return table;
}