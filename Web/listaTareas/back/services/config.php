<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');
date_default_timezone_set('america/argentina/buenos_aires');
$db = new SQLite3('../data/db.db');

?>