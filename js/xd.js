
function creartabla() {
    if (document.getElementById("Table")) {
        remove("Table");
    }
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.setAttribute('id', "Table");
    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('Holi').appendChild(table);
    let i = 0;
    var filascolumnas = document.getElementById("tabla").value;
    let numerar = 0;
    for (i = 0; i < filascolumnas; i++) {
        let row_1 = document.createElement('tr');

        for (j = 0; j < filascolumnas; j++) {
            let row_2_data_1 = document.createElement('td');
            let formulario = document.createElement("form");
            let cajaTextNombres = document.createElement("input");
            cajaTextNombres.setAttribute('type', "text");
            cajaTextNombres.setAttribute('placeholder', "DATOS");
            cajaTextNombres.setAttribute('id', numerar);
            cajaTextNombres.setAttribute('class', "tablita");
            numerar++;
            formulario.appendChild(cajaTextNombres);
            row_2_data_1.appendChild(formulario);
            row_1.appendChild(row_2_data_1);
        }
        thead.appendChild(row_1);
    }
}

function remove(id) {
    var element = document.getElementById(id);
    return element.parentNode.removeChild(element);
}




function captura() {


    let V = document.getElementById("tabla").value;


    function HayRuta(Grafiquito, s, t, grafiquito2) {


        let Puntos_Visitados = new Array(V);
        for (let i = 0; i < V; ++i)
            Puntos_Visitados[i] = false;


        let Cola = [];
        Cola.push(s);
        Puntos_Visitados[s] = true;
        grafiquito2[s] = -1;


        while (Cola.length != 0) {
            let u = Cola.shift();

            for (let v = 0; v < V; v++) {
                if (Puntos_Visitados[v] == false &&
                    Grafiquito[u][v] > 0) {


                    if (v == t) {
                        grafiquito2[v] = u;
                        return true;
                    }
                    Cola.push(v);
                    grafiquito2[v] = u;
                    Puntos_Visitados[v] = true;
                }
            }
        }

        return false;
    }


    function fordFulkerson(graph, s, t) {
        let u, v;

        let Grafiquito = new Array(V);

        for (u = 0; u < V; u++) {
            Grafiquito[u] = new Array(V);
            for (v = 0; v < V; v++)
                Grafiquito[u][v] = graph[u][v];
        }


        let grafiquito2
            = new Array(V);


        let maximo1
            = 0;


        while (HayRuta(Grafiquito, s, t, grafiquito2
        )) {


            let ruta
                = Number.MAX_VALUE;
            for (v = t; v != s; v = grafiquito2
            [v]) {
                u = grafiquito2
                [v];
                ruta
                    = Math.min(ruta
                        ,
                        Grafiquito[u][v]);
            }


            for (v = t; v != s; v = grafiquito2
            [v]) {
                u = grafiquito2
                [v];
                Grafiquito[u][v] -= ruta
                    ;
                Grafiquito[v][u] += ruta
                    ;
            }


            maximo1
                += ruta
                ;
        }


        return maximo1
            ;
    }

    let graph1 = new Array(V);
    let numerar = 0;
    for (u = 0; u < V; u++) {
        graph1[u] = new Array(V);
        for (v = 0; v < V; v++) {
            graph1[u][v] = document.getElementById(numerar).value;
            numerar++;
        }
    }

    swal("RESULTADO","The maximum possible flow is " +
        fordFulkerson(graph1, 0, document.getElementById("tabla").value - 1),'success');
    

}


function grafo() {


    var nodes = [
        { id: 1, label: "A" , color: "#E6CF97"},
        { id: 2, label: "B" ,color: "#E6CF97"},
        { id: 3, label: "C" ,color: "#E6CF97"},
        { id: 4, label: "D" ,color:"#E6CF97"},
        { id: 5, label: "E" ,color:"#E6CF97"},
        { id: 6, label: "F" ,color:"#E6CF97"},
        { id: 7, label: "G" ,color:"#E6CF97"},
        { id: 8, label: "H" ,color:"#E6CF97"},
        { id: 9, label: "I" ,color:"#E6CF97"},
        { id: 10, label: "J" ,color:"#E6CF97"},
        { id: 11, label: "K" ,color:"#E6CF97"},
        { id: 12, label: "L" ,color:"#E6CF97"},
        { id: 13, label: "M" ,color:"#E6CF97"},
        { id: 14, label: "N" ,color:"#E6CF97"},
        { id: 15, label: "O" ,color:"#E6CF97"},
    ];
    while (nodes.length > document.getElementById("tabla").value) {
        nodes.pop();
    }
    nodes[0].color = "#22C6DD"
    nodes[nodes.length-1].color = "#22C6DD"
    var edges = [
        { from: 1, to: 2, label: "label1", font: { background: "white" } },

    ];
    let i = 0;
    let j = 0;
    let v = 0;
    let numerar = 0;
    let V = document.getElementById("tabla").value;
    for (u = 0; u < V; u++) {

        for (v = 0; v < V; v++) {
            if (document.getElementById(numerar).value > 0) {
                if (j == 0) {
                    edges.pop();
                    edges = [{ from: (u + 1), to: (v + 1), arrows: "to", label: (document.getElementById(numerar).value), font: { color: "white" } },];
                    j++;

                } else {
                    edges.push({ from: (u + 1), to: (v + 1), arrows: "to", label: (document.getElementById(numerar).value), font: { color: "white" } });
                }
            }
            i++;
            numerar++;
        }

    }

    // create an array with edges

    // create a network
    var container = document.getElementById("dibujo");
    var data = {
        nodes: nodes,
        edges: edges,
    };
    var options = {
        nodes: { font: { strokeWidth: 0 } },
        edges: { font: { strokeWidth: 0 } },
    };
    var network = new vis.Network(container, data, options);

}

function Aleatorio() {
    let V = document.getElementById("tabla").value;
    let numerar = 0;
    for (u = 0; u < V; u++) {

        for (v = 0; v < V; v++) {
            if (u == v || u == V - 1) {
                document.getElementById(numerar).value = 0;
            } else {
                document.getElementById(numerar).value = Math.floor((Math.random() * (20 - 0 + 1)) + 0);
            }

            numerar++;
        }
    }
}
