<?php
include('config.php');

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();


$user = $data['user'];
$pass = $data['pass'];


$sql = "select Username,Password from Users where Username='$user' and Password='$pass'";

$results = $db->query($sql);

 
    while ($row = $results->fetchArray(SQLITE3_ASSOC))
    {
        $jsonArray[] = $row;
    }
 
    if (empty($jsonArray))
    {
        $jsonArray = array(['access'=>'denied']);
    }
 
    $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
 
    print $response;



?>
