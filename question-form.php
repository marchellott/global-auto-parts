<?php header("Content-Type: text/html; charset=utf-8");

$question = $_POST['question']=trim($_POST['question']);
$tel = $_POST['tel'];

$theme = "=?utf-8?b?" . base64_encode('Консультація: '.$question) . "?=";

if(($question !="") & ($tel !=""))

    $address = "Gautoparts1@gmail.com";
$massage = "Телефон: ".$tel."\nПитання: ".$question."";
$verify = mail($address, $theme, $massage, "Content-type:text/plain; charset=UTF-8\r\n");

print "<script>alert(\"Повідомлення успішно відправлено!\");window.location = '/index.html' </script>";
?>