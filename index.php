<?php

$output = [];

// Creo array con valores para los distintos multiplos
$values = [
    '3' => 'Falabella',
    '5' => 'IT',
    '35' => 'Integraciones'
];

$multiples = [3, 5];

// Genero array con números del 1 al 100
$numbers = [];
for($i = 1; $i <= 100; $i ++){
    $numbers[] = $i;
}

// Si viene este parámetro por GET se utiliza el valor asignado
if( !empty($_GET['number']) && is_numeric($_GET['number']) ){
    $numbers = [];
    $numbers[] = $_GET['number'];
}

foreach($numbers as $i){

    $keyValues = '';
  
    foreach($multiples as $multiple){
        while( $i % $multiple === 0 ){
            // Se concatenan los multiplos cuando se cumple la condición
            $keyValues .= $multiple;
            break; 
        }
    }

    // Único IF del código
    if( key_exists($keyValues, $values) ){
        $output[$i] = $values[$keyValues];
        continue;
    }

    $output[$i] = $i;
}

// Salida de datos
header('Content-type: application/json');
echo json_encode($output);