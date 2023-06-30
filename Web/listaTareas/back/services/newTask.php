<?php
include("config.php");


$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$task = $data['newTask'];
$user = $data['user'];

$sql = "insert into TaskList ('TaskName', 'CreatedBy','UpdatedBy','Status') values ('$task', '$user', '$user', 'active');";


$db->query($sql);

?>