<?php

$db = mysqli_connect('localhost','maware','maware0523','maware');

$sql = 'set session character_set_results=utf8';
$db -> query($sql);

if(mysqli_connect_errno($db)){
	die('db오류');
} 
?>

