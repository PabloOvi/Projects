<?php
include("config.php");


$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$id = $data['id'];
$command = $data['cmd'];
$user = $data['user'];

if ($command == '1') {
    $sql = "update TaskList set Status = 'active', UpdatedBy='$user' where id=$id;";
    $db->query($sql);

}elseif ($command == '3') {
    $sql = "update TaskList set Status = 'inprocess', UpdatedBy='$user' where id=$id;";
    $db->query($sql);

}elseif ($command == '2') {
    $sql = "update TaskList set Status = 'finished', UpdatedBy='$user' where id=$id;";
    $db->query($sql);

}




?>