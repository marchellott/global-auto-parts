<?php header("Content-Type: text/html; charset=utf-8");

$name = $_POST['name']=trim($_POST['name']);
$comment = $_POST['comment'];
$rating = $_POST['rating'];

$theme = "=?utf-8?b?" . base64_encode('Відгук: '.$name) . "?=";

if(($name !="") & ($comment !=""))

    $address = "Gautoparts1@gmail.com";
$massage = "Имя: ".$name."\nКоментар: ".$comment."\nРейтинг: ".$rating."";
$verify = mail($address, $theme, $massage, "Content-type:text/plain; charset=UTF-8\r\n");

print "<script>alert(\"Повідомлення успішно відправлено!\");window.location = '/index.html' </script>";
?>