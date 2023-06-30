<?php
include("config.php");


$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

    $sql = 'select * from TaskList';

    $results = $db->query($sql);

 
    while ($row = $results->fetchArray(SQLITE3_ASSOC))
    {
        $jsonArray[] = $row;
    }
 
     
    $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
 
    print $response;





?>