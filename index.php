<?php

$mm=$GET["mm"];
$name=$_GET["uusername"];
$r=$_GET["reason"];
$uc=$_GET["usercontact"];
$file=fopen("Message.txt", "a");
$date = date('d-m-y h:i:s');
fwrite($file, "Reason : ");
fwrite($file, $r);
// fwrite($file, $reason."\n");
fwrite($file, "Date : ");
fwrite($file, $date."\n");
fwrite($file, "Name :");
fwrite($file, $name);
// fwrite($file, $uusername."\n");
fwrite($file, "Contact :");
fwrite($file, $uc."\n");
fwrite($file, "Message :");
fwrite($file, $mm."\n");
fclose($file);

?>