<?php header("Content-Type: text/html; charset=utf-8");

$choice = $_POST['choice']=trim($_POST['choice']);
$tel = $_POST['tel'];
$number = $_POST['number'];

$theme = "=?utf-8?b?" . base64_encode('Пошук запчастин: '.$choice) . "?=";

if(($choice !="") & ($tel !=""))

    $address = "Gautoparts1@gmail.com";
$massage = "Телефон: ".$tel."\nНомер кузова або модель авто: ".$choice."\nНазва чи номер деталі: ".$number."";
$verify = mail($address, $theme, $massage, "Content-type:text/plain; charset=UTF-8\r\n");

print "<script>alert(\"Повідомлення успішно відправлено!\");window.location = '/index.html' </script>";
?>