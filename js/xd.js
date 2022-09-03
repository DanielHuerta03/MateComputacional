
function creartabla(){
if(document.getElementById("Table")){
    remove("Table");
}
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.setAttribute('id',"Table");
table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('Holi').appendChild(table);
let i=0;
var filascolumnas = document.getElementById("tabla").value;
let numerar=0;
for(i=0;i<filascolumnas;i++){
    let row_1 = document.createElement('tr');
    
    for(j=0;j<filascolumnas;j++){
        let row_2_data_1 = document.createElement('td');
        let formulario=document.createElement("form");
        let cajaTextNombres=document.createElement("input");
        cajaTextNombres.setAttribute('type', "text");
        cajaTextNombres.setAttribute('placeholder', "DATOS");
        cajaTextNombres.setAttribute('id', numerar);
        numerar++;
        formulario.appendChild(cajaTextNombres);
        row_2_data_1.appendChild(formulario);
        row_1.appendChild(row_2_data_1);
    }
    thead.appendChild(row_1);
}
}

function remove(id) 
	 {
     var element = document.getElementById(id);
     return element.parentNode.removeChild(element);
	 }




function captura(){
    
// Javascript program for implementation of Ford
// Fulkerson algorithm
 
// Number of vertices in graph
let V = document.getElementById("tabla").value;
 
// Returns true if there is a path from source
// 's' to sink 't' in residual graph. Also
// fills parent[] to store the path
function bfs(rGraph, s, t, parent)
{
     
    // Create a visited array and mark all
    // vertices as not visited
    let visited = new Array(V);
    for(let i = 0; i < V; ++i)
        visited[i] = false;
 
    // Create a queue, enqueue source vertex
    // and mark source vertex as visited
    let queue  = [];
    queue.push(s);
    visited[s] = true;
    parent[s] = -1;
 
    // Standard BFS Loop
    while (queue.length != 0)
    {
        let u = queue.shift();
 
        for(let v = 0; v < V; v++)
        {
            if (visited[v] == false &&
                rGraph[u][v] > 0)
            {
                 
                // If we find a connection to the sink
                // node, then there is no point in BFS
                // anymore We just have to set its parent
                // and can return true
                if (v == t)
                {
                    parent[v] = u;
                    return true;
                }
                queue.push(v);
                parent[v] = u;
                visited[v] = true;
            }
        }
    }
 
    // We didn't reach sink in BFS starting
    // from source, so return false
    return false;
}
 
// Returns tne maximum flow from s to t in
// the given graph
function fordFulkerson(graph, s, t)
{
    let u, v;
  
    // Create a residual graph and fill the
    // residual graph with given capacities
    // in the original graph as residual
    // capacities in residual graph
 
    // Residual graph where rGraph[i][j]
    // indicates residual capacity of edge
    // from i to j (if there is an edge.
    // If rGraph[i][j] is 0, then there is
    // not)
    let rGraph = new Array(V);
 
    for(u = 0; u < V; u++)
    {
        rGraph[u] = new Array(V);
        for(v = 0; v < V; v++)
            rGraph[u][v] = graph[u][v];
     }
      
    // This array is filled by BFS and to store path
    let parent = new Array(V);

    // There is no flow initially
    let max_flow = 0;
 
    // Augment the flow while tere
    // is path from source to sink
    while (bfs(rGraph, s, t, parent))
    {
         
        // Find minimum residual capacity of the edhes
        // along the path filled by BFS. Or we can say
        // find the maximum flow through the path found.
        let path_flow = Number.MAX_VALUE;
        for(v = t; v != s; v = parent[v])
        {
            u = parent[v];
            path_flow = Math.min(path_flow,
                                 rGraph[u][v]);
        }
 
        // Update residual capacities of the edges and
        // reverse edges along the path
        for(v = t; v != s; v = parent[v])
        {
            u = parent[v];
            rGraph[u][v] -= path_flow;
            rGraph[v][u] += path_flow;
        }
 
        // Add path flow to overall flow
        max_flow += path_flow;
    }
 
    // Return the overall flow
    return max_flow;
}
 
// Driver code

// Let us create a graph shown in the above example
let graph1 = new Array(V);
let numerar=0;
for(u = 0; u < V; u++)
{
    graph1[u] = new Array(V);
    for(v = 0; v < V; v++){
        graph1[u][v] = document.getElementById(numerar).value;
        numerar++;
    }
}
let graph = [ [ 0, 5, 7, 4, 0, 0, 0 ],
              [ 0, 0, 1, 0, 3, 0, 0 ],
              [ 0, 0, 0, 2, 4, 5, 0 ], 
              [ 0, 0, 0, 0, 0, 4, 0 ],
              [ 0, 0, 0, 0, 0, 0, 9 ],  
              [ 0, 0, 0, 0, 1, 0, 6 ],  
              [ 0, 0, 0, 0, 0, 0, 0 ] ];
    alert("The maximum possible flow is " +
                fordFulkerson(graph1, 0, document.getElementById("tabla").value-1));
 
// This code is contributed by avanitrachhadiya2155
 }


 function grafo(){
   // Arreglo de nodos
  // create an array with nodes
  
var nodes = [
    { id: 1, label: "A"},
    { id: 2, label: "B"},
    { id: 3, label: "C"},
    { id: 4, label: "D"},
    { id: 5, label: "E"},
    { id: 6, label: "F"},
    { id: 7, label: "G"},
    { id: 8, label: "H"},
    { id: 9, label: "I"},
    { id: 10, label: "J"},
    { id: 11, label: "K" },
    { id: 12, label: "L"},
    { id: 13, label: "M" },
    { id: 14, label: "N" },
    { id: 15, label: "O" },
  ];
  while(nodes.length>document.getElementById("tabla").value){
    nodes.pop();
  }
  
  var edges = [
    { from: 1, to: 2, label: "label1", font: { background: "white" } },
    
  ];
  let i = 0;
  let j = 0;
  let v = 0;
  let numerar=0;
  let V = document.getElementById("tabla").value;
  for( u = 0; u < V; u++)
  {
    
    for(v = 0 ; v < V; v++){
        if(document.getElementById(numerar).value>0){
            if(j==0) {
                edges.pop();
                edges = [{ from: (u+1), to: (v+1), label: (document.getElementById(numerar).value), font: { background: "white" } },];
                j++;

            }else{
                edges.push({ from: (u+1), to: (v+1), label: (document.getElementById(numerar).value), font: { background: "white" } });
            }
      }
      i++;    
      numerar++;
    }
  
  }
  alert(edges);
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