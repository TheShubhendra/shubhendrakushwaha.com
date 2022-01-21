<?php
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$message = wordwrap($message,70);

mail("shubhendrakushwaha94@gmail.com",$subject,$message);
location("index.html");
?>