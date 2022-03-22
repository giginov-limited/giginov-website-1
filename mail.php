<?php
//get data from form  

$name = $_POST['name'];
$email= $_POST['email'];
$company= $_POST['company'];
$inquiry= $_POST['inquiry'];

$to = " clifford@giginov.com";
$subject = "Mail From giginov website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Company =" . $company . "\r\n Inquiry =" . $inquiry;

$headers = "From: noreply@giginov.com" . "\r\n" .
"CC: clifford@giginov.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>