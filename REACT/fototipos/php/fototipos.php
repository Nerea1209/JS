<?php
//Se abre el fichero deonde están almacenados los datos
$fichero = "resultados.txt";
$contenido = file($fichero);
//colocamos el contenido en un array y lo almacenamos en cuatro variables por equipos
$array = explode("||", $contenido[0]);
$fototipo1 = $array[0];
$fototipo2 = $array[1];
$fototipo3 = $array[2];
$fototipo4 = $array[3];
$fototipo5 = $array[4];
$fototipo6 = $array[5];

//extraemos el voto de los participantes
$voto = $_GET['voto'];

//actualizamos los votos añadiendo el recibido a los anteriores
switch ($voto) {
    case 1:
        $fototipo1++;
        break;
    case 2:
        $fototipo2++;
        break;
    case 3:
        $fototipo3++;
        break;
    case 4:
        $fototipo4++;
        break;
    case 5:
        $fototipo5++;
        break;
    default:
        $fototipo6++;
        break;
}

//creamos la cadena que se va a insertar en el fichero
$insertvoto = $fototipo1 . "||" . $fototipo2 . "||" . $fototipo3 . "||" . $fototipo4 . "||" . $fototipo5 . "||" . $fototipo6;
//se abre el fichero como escritura y se escriben los votos actualizados
$fp = fopen($fichero, "w");
fputs($fp, $insertvoto);
fclose($fp);

// se calcula el % del voto de cada uno de los equipos
$denominador = (int)$fototipo1 + (int)$fototipo2 + (int)$fototipo3 + (int)$fototipo4 + (int)$fototipo5 + (int)$fototipo6;
$tantofototipo1 = 100 * round($fototipo1 / $denominador, 2);
$tantofototipo2 = 100 * round($fototipo2 / $denominador, 2);
$tantofototipo3 = 100 * round($fototipo3 / $denominador, 2);
$tantofototipo4 = 100 * round($fototipo4 / $denominador, 2);
$tantofototipo5 = 100 * round($fototipo5 / $denominador, 2);
$tantofototipo6 = 100 * round($fototipo6 / $denominador, 2);
