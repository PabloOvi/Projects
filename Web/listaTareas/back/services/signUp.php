<?php
include('config.php');

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();



$user = $data['user'];
$pass = $data['pass'];


$sql = "select Username from Users where Username='$user';";

$results = $db->query($sql);
 
$cols = $results->numColumns();


while ($row = $results->fetchArray(SQLITE3_ASSOC))
{
    $jsonArray[] = $row;
}

if (empty($jsonArray))
{
    $sql = "insert into Users ('Username', 'Password') values ('$user', '$pass');";
  
$db->query($sql);

$jsonArray = array(['access' => 'granted']);
$response = json_encode($jsonArray,JSON_PRETTY_PRINT);
print $response;

    
   
    
}else {
    $jsonArray = array(['access'=>'denied']);
    $response = json_encode($jsonArray,JSON_PRETTY_PRINT);
    
    print $response;
    
    
 
}




?>

