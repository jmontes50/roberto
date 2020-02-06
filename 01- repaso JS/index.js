// function suma(a,b) {
//     return a + b;
// }

// let sumaf = (a,b) => {
//     return a + b;
// }

// console.log(sumaf(5, 10));
//Lenguaje de Scripting;

window.onload = () => {

    let contenido = document.getElementById("contenido");
    let arregloEquipos = '';
    
    fetch('https://5e22b9e7afee990014e59669.mockapi.io/equipos').then((respuesta) => {
        //es otra promesa
        return respuesta.json();
    }).then((datos) => {
        // console.log(datos);
        //que se convierta en texto
        let tabla = document.createElement('table');
        tabla.innerHTML = `<thead>
                                <tr>
                                    <th>#</th>
                                    <th>id</th>
                                    <th>codigo</th>
                                    <th>descripcion</th>
                                </tr>
                            </thead>`;
        let tbody = document.createElement('tbody');
        tabla.appendChild(tbody);


        // contenido.innerHTML = JSON.stringify(datos);
        datos.forEach((equipo,index) => {
            let fila = document.createElement('tr');

            let columna0 = document.createElement('td');
            columna0.innerHTML = index;
            fila.appendChild(columna0);
            let columna1 = document.createElement('td');
            columna1.innerHTML = equipo.equi_id;
            fila.appendChild(columna1);
            let columna2 = document.createElement('td');
            columna2.innerHTML = equipo.equi_cod;
            fila.appendChild(columna2);
            let columna3 = document.createElement('td');
            columna3.innerHTML = equipo.equi_desc;
            fila.appendChild(columna3);

            tbody.appendChild(fila);

        });
        contenido.appendChild(tabla);
    })
}

//contexto (scope), objetos y arreglos
//!! callback, promesas y async/await
//!! clases en JS
//JavaScript Moderno (destructuracion)

