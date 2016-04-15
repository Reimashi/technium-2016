/**
 * Constantes
 * Podeis cambiar el tamaño de los grupos y el numero de elemento máximo a ordenar
 */
const EOL = "\r\n";
const MaxSize = 32;
const NumberOfPlaces = 320;

/**
 * Cargamos el archivo
 */
var fs = require("fs");
var elems = fs.readFileSync("entrada.txt", { encoding: "utf8" });

/**
 * Definición de tipos
 */
var User = function(id, watts) {
  var iid = Number(id);
  var iw = Number(watts);
  return {
    id: iid,
    watts: iw,
    toString: function() { return "ID: " + iid + " - " + iw + "w"; }
  }
};

/**
 * Parseamos el archivo de entrada
 */
var lines = elems.split("\n");
var places = [];
for (var x in lines) {
  if (lines[x].trim().startsWith("#")) { continue; }
  else {
    var info = lines[x].split(";")
    var place = new User(info[0], info[1]);
    places.push(place);
  }
}

/**
 * Ordenamos los elementos de mayor a menor
 */
places.sort(function(a, b) { return b.watts - a.watts; });

/**
 * Introducimos cada elemento del array en el grupo no lleno con menos potencia
 */
var groups = [];
for (var y = 0; y < (NumberOfPlaces / MaxSize); y++) { groups.push([]); }

for (var x in places) {
  var index = 0;
  var indexsize = Number.MAX_SAFE_INTEGER;
  for (var y in groups) {
    var groupsize = groups[y].reduce(function(a, b) { return a + b.watts }, 0);

    if (groups[y].length < MaxSize && indexsize > groupsize) {
      indexsize = groupsize;
      index = y;
    }
  }
  groups[index].push(places[x]);
}

/**
 * Imprimimos el resultado a un archivo, separando los grupos con una linea en blanco
 */
var salida = "";
for (var x in groups) {
  salida += "# Mesa" + x + EOL;
  for (var y in groups[x]) { salida += groups[x][y].id + ";" + groups[x][y].watts + EOL; }
  salida += EOL;
}
fs.writeFileSync("salida.txt", salida);
