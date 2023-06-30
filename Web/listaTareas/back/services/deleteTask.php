<?php
include("config.php");


$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$id = $data['id'];


$sql = "delete from TaskList where Id=$id;";


$db->query($sql);

?>