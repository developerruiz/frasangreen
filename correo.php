<?php

$destinatario = 'contacto@frasangreen.com.mx';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono =  $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$header = "Frasan Green contacto pagina web";
$mensajeCompleto = "\nAtentamente: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje . "\n Telefono: " . $telefono ;

mail($destinatario, $header, $mensajeCompleto);

echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";

?>