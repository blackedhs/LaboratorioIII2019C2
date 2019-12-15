arrayAnuncios = [];
$(function () {
    frm = $('#Frm');
    divId = $('#divId');
    divTabla = $('#DivTabla');
    btnGuardar = $('#Guardar');
    btnLimpiar = $('#Limpiar');
    btnCancelar = $('#Cancelar');
    selTransaccion = $('#selTransaccion');
    $('input:checkbox').change(FiltarCheck);
    selTransaccion.change(FiltrarTransaccion);
    localStorage.setItem('anuncios', null);
    divId.hide();
    btnLimpiar.hide();
    btnCancelar.hide();
    btnCancelar.click();
    btnLimpiar.click(LimpiarForm);
    frm.submit(GuardarModificar);
    cargarSelTransaccion();
    // $datos = [new anuncio(1, 'Casa de lujo', 'venta', 'casa linda', '15.000', 2, 3, 4)];
    // divTabla.append(CrearTabla($datos));

})
function LimpiarForm() {
    $('#Id').val('');
    $('#Titulo').val('');
    $('#Venta').prop('checked', true);
    $('#Precio').val(0);
    $('#Descripcion').val('');
    $('#Baños').val(0);
    $('#Autos').val(0);
    $('#Dormis').val(0);
    btnLimpiar.hide();
    btnCancelar.hide();
}
function GuardarModificar(e) {
    e.preventDefault();
    anuncios = JSON.parse(localStorage.getItem('anuncios'));
    btnGuardar = $('#Guardar');
    if (btnGuardar.html() == 'Guardar') {
        anuncio = CrearAnuncio(e.target, true);
        if (anuncios == null) {
            arrayAnuncios = [];
            arrayAnuncios.push(anuncio);
            localStorage.setItem('anuncios', JSON.stringify(arrayAnuncios));
            cargarSelTransaccion();
        }
        else {
            arrayAnuncios = [];
            for (let index = 0; index < anuncios.length; index++) {
                element = anuncios[index];
                arrayAnuncios.push(ObtenerObj(element));
            }
            arrayAnuncios.push(anuncio);
            localStorage.setItem('anuncios', JSON.stringify(arrayAnuncios));
            cargarSelTransaccion();
        }
    }
    else {
        anuncio = CrearAnuncio(e.target, false);
        anuncios.forEach(element => {
            if (element.id == anuncio.id) {
                element.titulo = anuncio.titulo;
                element.transaccion = anuncio.transaccion;
                element.descripcion = anuncio.descripcion;
                element.precio = anuncio.precio;
                element.baños = anuncio.baños;
                element.cocheras = anuncio.cocheras;
                element.cocheras = anuncio.cocheras;
                element.habitaciones = anuncio.habitaciones;
            }
        });
        arrayAnuncios = [];
        for (let index = 0; index < anuncios.length; index++) {
            element = anuncios[index];
            arrayAnuncios.push(ObtenerObj(element));
        }
        localStorage.setItem('anuncios', JSON.stringify(arrayAnuncios));
        btnGuardar.html('Guardar');
        btnLimpiar.hide();
        btnCancelar.hide();
        $('#divId').hide();
        cargarSelTransaccion();
    }
    RestablecerChk();
    MostrarTabla(arrayAnuncios);
}
function CrearAnuncio(frm, crearId) {
    let id, titulo, transaccion, descripcion, precio, baños, autos, dormis;
    for (Element of frm.elements) {
        switch (Element.name) {
            case 'Id':
                if (crearId) {
                    anuncios = JSON.parse(localStorage.getItem('anuncios'));
                    if (anuncios != null) {
                        id = anuncios.map(e => e.id)
                            .reduce((p, c) => {
                                if (p < c)
                                    return c;
                            }, 0) + 1;
                    } else
                        id = 1;
                } else
                    id = Element.value;
                break;
            case 'Titulo':
                titulo = Element.value;
                break;
            case 'Transaccion':
                if (Element.checked === true)
                    transaccion = Element.value;
                break;
            case 'Descripcion':
                descripcion = Element.value;
                break;
            case 'Precio':
                precio = Element.value;
                break;
            case 'Baños':
                baños = Element.value;
                break;
            case 'Autos':
                autos = Element.value;
                break;
            case 'Dormis':
                dormis = Element.value;
                break;
        }
    }
    anuncio = new Anuncio(id, titulo, transaccion, descripcion, precio, baños, autos, dormis);
    return anuncio;
}
function ObtenerObj(anuncio) {
    obj = new Anuncio(anuncio.id, anuncio.titulo, anuncio.transaccion, anuncio.descripcion
        , anuncio.precio, anuncio.baños, anuncio.cocheras, anuncio.habitaciones);
    return obj;
}
function MostrarTabla(arrayAnuncios) {
    divTabla.html('');
    divTabla.append(CrearTabla(arrayAnuncios));
    tds = $('*td');
    tds.click(ManejadorTds);
}
function ManejadorTds(e) {
    tr = e.target.parentElement.childNodes;
    anuncio = new Anuncio(tr[0].textContent, tr[1].textContent, tr[2].textContent, tr[4].textContent,
        tr[3].textContent, tr[5].textContent, tr[6].textContent, tr[7].textContent);
    CargarForm(anuncio);
}
function CargarForm(anuncio) {
    $('#divId').show();
    $('#Id').val(anuncio.id);
    $('#Titulo').val(anuncio.titulo);
    if (anuncio.transaccion == 'Venta' || anuncio.transaccion == 0)
        $('#Venta').prop('checked', true);
    else
        $('#Alquiler').prop('checked', true);

    $('#Precio').val(anuncio.precio);
    $('#Descripcion').val(anuncio.descripcion);
    $('#Baños').val(anuncio.baños);
    $('#Autos').val(anuncio.cocheras);
    $('#Dormis').val(anuncio.habitaciones);
    btnGuardar.html('Modificar');
    btnLimpiar.show();
    btnCancelar.show();
}
function FiltrarTransaccion() {

    if ($('#selTransaccion').val() == 'Todos') {
        arrayAnuncios = [];
        anuncios = JSON.parse(localStorage.getItem('anuncios'));
        for (let index = 0; index < anuncios.length; index++) {
            element = anuncios[index];
            arrayAnuncios.push(ObtenerObj(element));
        }
        localStorage.setItem('anuncios', JSON.stringify(arrayAnuncios));
    } else {
        newAray = arrayAnuncios.filter(element => element.transaccion == ITransaccion[$('#selTransaccion').val()]);
    }
    MostrarTabla(newAray);
}
function cargarSelTransaccion() {
    let transacciones = arrayAnuncios.map(element => element.transaccion)
        .unique();
    selTransaccion.html('');
    let option = document.createElement('option');
    option.textContent = 'Todos';
    option.value = 'Todos';
    selTransaccion.append(option);
    transacciones.forEach(element => {
        let option = document.createElement('option');
        option.textContent = ITransaccion[element];
        option.value = ITransaccion[element];
        selTransaccion.append(option);
    });
}
Array.prototype.unique = function () {
    return [...new Set(this)];
}
function FiltarCheck() {
    let arrayFiltradoChk = [];
    
    $('input:checkbox').each( function () {
        if ($(this).prop('checked') == true) {
            arrayFiltradoChk.push($(this).val());
        }
    });
    let arrayCheck = arrayAnuncios.map(function (dato) {
        let objeto = new Object();
        arrayFiltradoChk.forEach(elemento => {
            objeto[elemento] = dato[elemento];
        });
        return objeto;
    });
    MostrarTabla(arrayCheck);
}
function RestablecerChk() {
    $('input:checkbox').prop('checked', true);
}