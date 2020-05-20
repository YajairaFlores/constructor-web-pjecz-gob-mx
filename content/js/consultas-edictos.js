// Consultas Edictos
$(document).ready(function() {

    // Inicialmente se muestra los select y se oculta la lista
    $("#elegirEdictos").show();
    $("#listaEdictos").hide();

    // Opciones del select distrito
    $("#distritoSelect").append(
        '<option value="0">- Elija la entidad/distrito -</select>',
        '<option value="1">Pleno del Tribunal Superior de Justicia</select>',
        '<option value="2">Salas TSJ</select>',
        '<option value="3">Distrito de Acuña</select>',
        '<option value="4">Distrito de Monclova</select>',
        '<option value="5">Distrito de Parras de la Fuente</select>',
        '<option value="6">Distrito de Rio Grande</select>',
        '<option value="7">Distrito de Sabinas</select>',
        '<option value="8">Distrito de Saltillo</select>',
        '<option value="9">Distrito de San Pedro de las Colonias</select>',
        '<option value="10">Distrito de Torreón</select>',
    );

    // Arreglo de opciones para el select autoridad,
    // debe tener la misma cantidad de elementos que el distritoSelect,
    // note los textos se concatenan con un signo de más
    // el primero está vacío porque no se ha elejido la entidad/distrito
    var options = [

        '',

        '<option value="">Pleno del Tribunal Superior de Justicia</option>',

        '<option value="">Sala Civil</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Civil Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Familiar Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Juzgado%20de%20Primera%20Instancia%20en%20Materia%20Penal%20Acu%C3%B1a/lista.json">Juzgado de Primera Instancia en Materia Penal Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%201%20Acu%C3%B1a/lista.json">Notaria Pública 1 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%202%20Acu%C3%B1a/lista.json">Notaria Pública 2 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%203%20Acu%C3%B1a/lista.json">Notaria Pública 3 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%205%20Acu%C3%B1a/lista.json">Notaria Pública 5 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%206%20Acu%C3%B1a/lista.json">Notaria Pública 6 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%208%20Acu%C3%B1a/lista.json">Notaria Pública 8 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%2014%20Acu%C3%B1a/lista.json">Notaria Pública 14 Acuña</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Acu%C3%B1a/Notaria%20P%C3%BAblica%2017%20Acu%C3%B1a/lista.json">Notaria Pública 17 Acuña</option>',

        '<option value="">Juzgado Primero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Civil Monclova</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="">Juzgado Cuarto de Primera Instancia en Materia Familiar Monclova</option>' +
        '<option value="">Notaria Pública 14 Monclova</option>' +
        '<option value="">Notaria Pública 15 Monclova</option>' +
        '<option value="">Notaria Pública 17 Monclova</option>' +
        '<option value="">Notaria Pública 18 Monclova</option>' +
        '<option value="">Notaria Pública 21 Monclova</option>' +
        '<option value="">Notaria Pública 22 Monclova</option>',

        '<option value="">Juzgado de Primera Instancia en Materia Civil y Familiar Parras</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Oral de Parras</option>',

        '<option value="">Juzgado Primero de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Familiar Piedras Negras</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Civil Piedras Negras</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Familiar Oral Piedras Negras</option>' +
        '<option value="">Notaria Pública 02 Piedras Negras</option>' +
        '<option value="">Notaria Pública 03 Piedras Negras</option>' +
        '<option value="">Notaria Pública 04 Piedras Negras</option>' +
        '<option value="">Notaria Pública 05 Piedras Negras</option>' +
        '<option value="">Notaria Pública 06 Piedras Negras</option>' +
        '<option value="">Notaria Pública 07 Piedras Negras</option>' +
        '<option value="">Notaria Pública 10 Piedras Negras</option>' +
        '<option value="">Notaria Pública 10 Zaragoza</option>' +
        '<option value="">Notaria Pública 12 Piedras Negras</option>' +
        '<option value="">Notaria Pública 13 Piedras Negras</option>',

        '<option value="">Juzgado de Primera Instancia en Materia Civil y Familiar Sabinas</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Sabinas</option>' +
        '<option value="">Juzgado Sexto Auxiliar de Primera Instancia en Materia Familiar Sabinas</option>' +
        '<option value="">Notaria Pública 5 Sabinas</option>' +
        '<option value="">Notaria Pública 6 Sabinas</option>' +
        '<option value="">Notaria Pública 7 Nueva Rosita</option>' +
        '<option value="">Notaria Pública 8 Nueva Rosita</option>' +
        '<option value="">Notaria Pública 12 Sabinas</option>' +
        '<option value="">Notaria Pública 13 Melchor Muzquiz</option>' +
        '<option value="">Notaria Pública 14 Sabinas</option>' +
        '<option value="">Notaria Pública 15 Nueva Rosita</option>',

        '<option value="">Juzgado Cuarto de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="">Juzgado Cuarto de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Auxiliar del Juzgado Segundo Familiar Saltillo</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="">Juzgado Primero de Primera Instancia en Materia Mercantil Saltillo</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="">Juzgado Segundo de Primera Instancia en Materia Familiar Saltillo</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Civil Saltillo</option>' +
        '<option value="">Juzgado Tercero de Primera Instancia en Materia Familiar Oral Saltillo</option>' +
        '<option value="">Notaria Pública 10 Saltillo</option>' +
        '<option value="">Notaria Pública 100 Saltillo</option>' +
        '<option value="">Notaria Pública 102 Saltillo</option>',

        '<option value="">Juzgado de Primera Instancia en Materia Civil San Pedro</option>' +
        '<option value="">Juzgado de Primera Instancia en Materia Familiar Oral San Pedro</option>' +
        '<option value="">Notaria Publica 7 Francisco I Madero</option>',

        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Primero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Primero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Primero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Segundo%20de%20Primera%20Instancia%20en%20Materia%20Mercantil%20Torre%C3%B3n/lista.json">Juzgado Segundo de Primera Instancia en Materia Mercantil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Segundo%20Letrado%20Civil%20Torre%C3%B3n/lista.json">Juzgado Segundo Letrado Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Tercero de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Tercero%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Tercero de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Civil%20Torre%C3%B3n/lista.json">Juzgado Cuarto de Primera Instancia en Materia Civil Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Cuarto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Torre%C3%B3n/lista.json">Juzgado Cuarto de Primera Instancia en Materia Familiar Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20Quinto%20de%20Primera%20Instancia%20en%20Materia%20Familiar%20Oral%20Torre%C3%B3n/lista.json">Juzgado Quinto de Primera Instancia en Materia Familiar Oral Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Juzgado%20en%20Materia%20de%20Adolescentes%20Torre%C3%B3n/lista.json">Juzgado en Materia de Adolescentes Torreón</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%201%20Torreon/lista.json">Notaria Publica 1 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%203%20Torreon/lista.json">Notaria Publica 3 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%204%20Torreon/lista.json">Notaria Publica 4 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%205%20Torreon/lista.json">Notaria Publica 5 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%206%20Torreon/lista.json">Notaria Publica 6 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%207%20Torreon/lista.json">Notaria Publica 7 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%208%20Torreon/lista.json">Notaria Publica 8 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2010%20Torreon/lista.json">Notaria Publica 10 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2012%20Torreon/lista.json">Notaria Publica 12 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2014%20Torreon/lista.json">Notaria Publica 14 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2015%20Torreon/lista.json">Notaria Publica 15 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2016%20Torreon/lista.json">Notaria Publica 16 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2017%20Torreon/lista.json">Notaria Publica 17 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2018%20Torreon/lista.json">Notaria Publica 18 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2019%20Torreon/lista.json">Notaria Publica 19 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2021%20Torreon/lista.json">Notaria Publica 21 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2022%20Torreon/lista.json">Notaria Publica 22 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2023%20Torreon/lista.json">Notaria Publica 23 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2024%20Torreon/lista.json">Notaria Publica 24 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2027%20Torreon/lista.json">Notaria Publica 27 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2028%20Torreon/lista.json">Notaria Publica 28 Torreon</option>' +
        '<option value="https://storage.googleapis.com/pjecz-consultas/Edictos/Distrito%20de%20Torreon/Notaria%20Publica%2029%20Torreon/lista.json">Notaria Publica 29 Torreon</option>'

    ];

    // Al cambiar el distrito se cambian las opciones en autoridad
    $("#distritoSelect").change(function() {
        var val = $(this).val();
        $("#autoridadSelect").html(options[val]);
    });

    // Al dar clic en el botón mostrar
    $("#mostrarButton").click(function(){

        // Si hay un valor en autoridadSelect
        if (!$("#autoridadSelect").is(":empty")) {

            // Si es la primera vez se muestra la tabla
            // de lo contrario hay que limpiar y destruir
            // para que puedan cargarse otros resultados
            if ($("#listaEdictos").is(":hidden")) {
                $("#listaEdictos").show();
            } else {
                $('#listaEdictos').DataTable().clear();
                $('#listaEdictos').DataTable().destroy();
            }

            // Cargar los datos a la tabla
            // toma el valor de distritoSelect que es el URL al archivo JSON
            // dicho archivo debe tener valores para Fecha, Sentencia, Expediente, P. Género y Archivo
            $('#listaEdictos').DataTable( {
                "ajax": $("#autoridadSelect").val(),
                "columns": [
                    { "data": "Fecha" },
                    { "data": "Expediente" },
                    { "data": "Edicto" },
                    { "data": "Descripcion" },
                    { "data": "Archivo",
                        "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                            $(nTd).html("<a href='"+oData.Archivo+"' target='_blank'><i class='fa fa-download'></i> Descargar</a>");
                        }
                    }
                ],
                "pageLength": 50,
                "order": [[ 0, "desc" ]],
                "language": {
                    "lengthMenu": "Mostrar _MENU_",
                    "search": "Filtrar:",
                    "zeroRecords": "Cargando información...",
                    "info": "Página _PAGE_ de _PAGES_",
                    "infoEmpty": "No hay registros",
                    "infoFiltered": "(filtrados desde _MAX_ registros totales)",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast": "Último",
                        "sNext": "Siguiente",
                        "sPrevious": "Anterior"
                    }
                }
            }); // Cargar los datos a la tabla

        } // Si hay un valor en autoridadSelect

    }); // Al dar clic en el botón mostrar

});
