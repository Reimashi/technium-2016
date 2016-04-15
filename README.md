# technium-2016
Concurso de programación de la Technium Party 2016

## Descripción
Ayúdanos a organizar la siguiente Technium!

Nuestro problema es el siguiente:

Como sabéis, utilizamos un generador eléctrico así que tenemos que tener cuidado con qué carga eléctrica ponermos en cada mesa. Dada una lista de usuarios de la LanParty, necesitamos organizar las filas de mesas de la forma más balanceada en carga posible.

La lista de usuarios incluye 320 líneas definidas del siguiente modo:

#Linea de comentario
201;850

Que representan, el ID de usuario 201, con carga eléctrica de 850W. Se pueden escribir comentarios de una linea prefijados con un #, que no se influirán en el recuento final.

El objetivo es reordenar esa lista de modo que aparezca en bloques de 32 puestos. La suma de cada bloque debe sumar un valor similar balanceado de watios.

Por ejemplo, dada una lista inicial de 4 usuarios a repartir en 2 mesas de 2 puestos, sería:

201;850
202;1000
203;300
204;300

Una salida viable sería:
#Mesa1
203;300
201;850
#Mesa2
204;300
202;1000

Se trata de replicar lo anterior para 10 mesas de 32 puestos (320 personas) de la manera más repartida (en watios) posible.

VALORACIÓN

No hay restricción de lenguaje, pero se valorará el código con menos caracteres.
