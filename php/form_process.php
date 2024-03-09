<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['action']) and $_POST['action'] == 'subscribe') {
        $email = $_POST["morisdakar.business@gmail.com"];
        $subject = "WORK EMAIL FROM WEBSITE"; // Replace your Subject Here
        $to = "morisdakar.business@gmail.com"; // Replace your Email Here
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/html\r\n";
        $message = "Thank You For Reaching Out! You'll Be Contacted Soon"; // Replace Your Message Subscribe

        $messageBody = "Email: $email<br>Message: $message";

        if (mail($to, $subject, $messageBody, $headers)) {
            echo "success"; // Send response Success
        } else {
            echo "error"; // Send Response Failed Send Mail
        }
    } else {
        $name = (isset($_POST['name'])) ? $_POST["name"] : $_POST['first_name'] . ' ' . $_POST['last_name'];
        $email = $_POST["email"];
        $message = $_POST["message"];
        $subject = "Subject Email"; // Replace your Subject Here

        $to = "morisdakar.business@gmail.com"; // Replace your Email Here
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-type: text/html\r\n";

        $messageBody = "Name: $name<br>Email: $email<br>Message: $message";

        if (mail($to, $subject, $messageBody, $headers)) {
            echo "success"; // Send response Success
        } else {
            echo "error"; // Send Response Failed Send Mail
        }
    }
}
